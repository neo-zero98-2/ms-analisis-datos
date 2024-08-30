import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseInterceptors, Query } from '@nestjs/common';
import { GastosFederalizadosService } from './gastos-federalizados.service';
import { CreateGastosFederalizadoDto } from './dto/create-gastos-federalizado.dto';
import { UpdateGastosFederalizadoDto } from './dto/update-gastos-federalizado.dto';
import { TransformInterceptor } from './interceptors/transform.interceptor';

@Controller('gastos-federalizados')
@UseInterceptors(TransformInterceptor)
export class GastosFederalizadosController {
  constructor(private readonly gastosFederalizadosService: GastosFederalizadosService) {}

  @Post()
  create(@Body() createGastosFederalizadoDto: CreateGastosFederalizadoDto) {
    return this.gastosFederalizadosService.create(createGastosFederalizadoDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findHeadersTable():Promise<{}[]> {
    return this.gastosFederalizadosService.findHeadersTable();
  }

  @Get('ecxel')
  @HttpCode(HttpStatus.OK)
  async findAllDataXlsx(@Query('url') urlDocument: string):Promise<any> {
    return this.gastosFederalizadosService.findAllDataXlsx(urlDocument);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gastosFederalizadosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGastosFederalizadoDto: UpdateGastosFederalizadoDto) {
    return this.gastosFederalizadosService.update(+id, updateGastosFederalizadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gastosFederalizadosService.remove(+id);
  }
}
