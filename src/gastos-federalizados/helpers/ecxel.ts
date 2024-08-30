import * as XLSX from 'xlsx';
import * as fs from 'fs';
import path from 'path';
import axios from 'axios';

import { readFile, utils, set_fs } from 'xlsx';
import { join } from 'path';
import { cwd } from 'process';

XLSX.set_fs(fs);

const EXCEL_URL = 'https://www.transparenciapresupuestaria.gob.mx/work/models/PTP/DatosAbiertos/Entidades_Federativas/2014/avance_financiero.xlsx'; // Cambia esta URL a la ubicación de tu archivo Excel

export const downloadExcel = async (ecxelUrl:string) => {
    try {
        // Hacer una solicitud HTTP para obtener el archivo Excel
        const response = await axios.get(ecxelUrl, { responseType: 'arraybuffer' });

        // Guardar el archivo Excel en el sistema de archivos
        // const filePath = path.join('/home/neo/projects/diplomado/ms-scraping-analisis/', 'archivos/archivo.xlsx') //ruta de la carpeta
        const filePath = join(cwd(), "archivos", "sheetjs.xlsx") //ruta de la carpeta
        console.log("file ", filePath);

        fs.writeFileSync(filePath, response.data);
        console.log('Archivo Excel descargado en:', filePath);

        // Procesar el archivo Excel después de descargarlo

        // Leer el archivo Excel
        const workbook = XLSX.readFile(filePath);

        // Obtener el nombre de la primera hoja
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Convertir la hoja a JSON
        const data = XLSX.utils.sheet_to_json(sheet, {header: 1});
        const object = data.map( item => ({
            año: item[0],
            entidad: item[2],
            municipio: item[3],
            programa: item[9],
            aprobado: item[18],
            modificado: item[19],
            recaudado: item[20],
            comprometido: item[21],
            devengado: item[22],
            ejercido: item[23],
            pagado: item[24]
        }))
        console.log(data.length);
        
        // console.log('Datos del archivo Excel:', data);
        return object;
    } catch (error) {
        console.error('Error al descargar el archivo Excel:', error.message);
    }
}