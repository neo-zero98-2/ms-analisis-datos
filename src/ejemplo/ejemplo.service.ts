import { Injectable } from '@nestjs/common';
import { CreateEjemploDto } from './dto/create-ejemplo.dto';
import { UpdateEjemploDto } from './dto/update-ejemplo.dto';
import puppeteer from "puppeteer";

@Injectable()
export class EjemploService {
  create(createEjemploDto: CreateEjemploDto) {
    return 'This action adds a new ejemplo';
  }

  async findAll() {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 200,
      executablePath: '/usr/bin/chromium-browser' //inicializa  chromium-browser 
    });

    const page = await browser.newPage();
    await page.goto('https://www.cmsadmin.hacienda.gob.mx/Datos-Abiertos');
    const data = await page.evaluate(() => {
        let title = document.querySelector('h1').innerText;
        let description = document.querySelector('p').innerText;
        return {
            title,
            description,
        }
    });
    console.log(data);
    await browser.close();
    return `This action returns all ejemplo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ejemplo`;
  }

  update(id: number, updateEjemploDto: UpdateEjemploDto) {
    return `This action updates a #${id} ejemplo`;
  }

  remove(id: number) {
    return `This action removes a #${id} ejemplo`;
  }
}
