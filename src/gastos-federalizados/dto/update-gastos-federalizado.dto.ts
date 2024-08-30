import { PartialType } from '@nestjs/mapped-types';
import { CreateGastosFederalizadoDto } from './create-gastos-federalizado.dto';

export class UpdateGastosFederalizadoDto extends PartialType(CreateGastosFederalizadoDto) {}
