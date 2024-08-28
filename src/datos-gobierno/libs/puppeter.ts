import puppeteer from 'puppeteer';

export async function openWebPage() {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 200,
    });
    // const page = await browser.newPage();
    // await page.goto("https://www.cmsadmin.hacienda.gob.mx/Datos-Abiertos");
    await browser.close();
}