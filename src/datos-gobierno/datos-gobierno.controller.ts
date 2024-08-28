import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { DatosGobiernoService } from './datos-gobierno.service';
import { CreateDatosGobiernoDto } from './dto/create-datos-gobierno.dto';
import { UpdateDatosGobiernoDto } from './dto/update-datos-gobierno.dto';
import puppeteer from 'puppeteer';
import { Response } from 'express';
import { chromium } from 'playwright';
import { CherrioService } from './cherrio/cherrio.service';
import { Observable } from 'rxjs';

@Controller('datos-gobierno')
export class DatosGobiernoController {
  constructor(
    private readonly datosGobiernoService: DatosGobiernoService,
    private readonly cherrio:CherrioService
  ) {}

  @Post()
  create(@Body() createDatosGobiernoDto: CreateDatosGobiernoDto) {
    return this.datosGobiernoService.create(createDatosGobiernoDto);
  }

  @Get()
  findAll() {
    // const browser = await chromium.launch({
    //   headless: false
    // });

    // browser.close();
    // const browser = await puppeteer.launch({
    //   headless: false
    // });
    // const page = await browser.newPage();
    // await page.goto('https://www.example.com');
    // await page.screenshot({path: 'example.png'});
    // await browser.close();
    // this.cherrio.findAll().subscribe(res => {
    //   console.log("res", res);
      
    // });
    this.cherrio.findAll();

    return "hola";


    
    // return this.datosGobiernoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datosGobiernoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDatosGobiernoDto: UpdateDatosGobiernoDto) {
    return this.datosGobiernoService.update(+id, updateDatosGobiernoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datosGobiernoService.remove(+id);
  }
}
