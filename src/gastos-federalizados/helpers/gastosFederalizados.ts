import puppeteer from "puppeteer";
import { Table } from "../interfaces";

//obtiene campos de los fideicomisos ubicados en la tabla
export const camposGastosFederalizados = async () => {

    // warning 
    // importante instalar sudo apt-get install chromium-browser para que jale el webscraping
    const browser = await puppeteer.launch({
        // headless: false,
        // slowMo: 100, // slow down by 250ms
        // executablePath: '/usr/bin/chromium-browser' //inicializa  chromium-browser solo funciona con ubuntu

        // para debian o docker
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.goto('https://www.cmsadmin.hacienda.gob.mx/Datos-Abiertos');

    // Espera a que el <select> esté disponible usando su clase
    await page.waitForSelector('select.sc-cxabCf');

    // Selecciona la opción deseada usando el valor de la opción
    await page.select('select.sc-cxabCf', '3581');

    // escribir en el buscador
    await page.locator('input').fill('Gasto Federalizado (Avance Financiero)');

    const tableData = await page.evaluate(() => {

        // obteener un div por clase css
        const table = document.querySelector('div.rdt_Table');

        //obtiene un array del table head
        const headers = Array.from(table.querySelectorAll('div[role="columnheader"]')).map(header => header.textContent.trim().replace("▲", ""));

        // obtiene un array de las rows
        const rows = Array.from(table.querySelectorAll('div.rdt_TableRow'));

        //transforma las rows a un json
        const dataJson = rows.map(row => {
            const cells = Array.from(row.querySelectorAll('div[role="gridcell"]')) // obtiene un div por role

            return cells.reduce(
                (acumulator, currentValue, index) => {
                    if (headers.length - 1 === index) {
                        acumulator[headers[index]] = currentValue.querySelector('a').href;
                        return acumulator;
                    }
                    acumulator[headers[index]] = currentValue.textContent.trim();
                    return acumulator;
                },
                {}
            )
        })
        .filter((item: Table) => item.Periodo  === 'Informe Definitivo')
        .filter((item: Table) => !item.Descarga.includes('.zip')); //quita los archivos .zip

        return dataJson;
    });


    // await new Promise((resolve) => setTimeout(resolve, 3000)); // espera 7 segundos antes de que se cierre el navegador
    await browser.close();
    return tableData;
}