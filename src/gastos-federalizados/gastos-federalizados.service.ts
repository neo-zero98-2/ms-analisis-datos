import { Injectable } from '@nestjs/common';
import { CreateGastosFederalizadoDto } from './dto/create-gastos-federalizado.dto';
import { UpdateGastosFederalizadoDto } from './dto/update-gastos-federalizado.dto';
import { camposGastosFederalizados, downloadExcel } from './helpers';

@Injectable()
export class GastosFederalizadosService {

  create(createGastosFederalizadoDto: CreateGastosFederalizadoDto) {
    return 'This action adds a new gastosFederalizado';
  }

  async findHeadersTable():Promise<{}[]> {
    return await camposGastosFederalizados();
  }

  async findAllDataXlsx(urlDocument: string):Promise<any> {
    return await downloadExcel(urlDocument);
  }

  findOne(id: number) {
    return `This action returns a #${id} gastosFederalizado`;
  }

  update(id: number, updateGastosFederalizadoDto: UpdateGastosFederalizadoDto) {
    return `This action updates a #${id} gastosFederalizado`;
  }

  remove(id: number) {
    return `This action removes a #${id} gastosFederalizado`;
  }
}
