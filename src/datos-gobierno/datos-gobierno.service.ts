import { Injectable } from '@nestjs/common';
import { CreateDatosGobiernoDto } from './dto/create-datos-gobierno.dto';
import { UpdateDatosGobiernoDto } from './dto/update-datos-gobierno.dto';
import { openWebPage } from './libs/puppeter';
import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';

@Injectable()
export class DatosGobiernoService {
  create(createDatosGobiernoDto: CreateDatosGobiernoDto) {
    return 'This action adds a new datosGobierno';
  }

  async findAll() {
    // openWebPage();
    return `This action returns all datosGobierno`;
  }

  findOne(id: number) {
    return `This action returns a #${id} datosGobierno`;
  }

  update(id: number, updateDatosGobiernoDto: UpdateDatosGobiernoDto) {
    return `This action updates a #${id} datosGobierno`;
  }

  remove(id: number) {
    return `This action removes a #${id} datosGobierno`;
  }
}
