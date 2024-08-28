import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCatDto } from './dto/crear-cat.dto';
import { DatosService } from './datos.service';
import { Cat } from './interfaces/cat.interface';

@Controller('datos')
export class DatosController {
    constructor(private datosService: DatosService){}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createCatDto: CreateCatDto) {
        this.datosService.create(createCatDto);
        // return res.status(HttpStatus.CREATED);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async finAll(): Promise<Cat[]> {
        
        return this.datosService.findAll();
        // return "hola"
    }
}
