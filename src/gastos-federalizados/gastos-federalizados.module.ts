import { Module } from '@nestjs/common';
import { GastosFederalizadosService } from './gastos-federalizados.service';
import { GastosFederalizadosController } from './gastos-federalizados.controller';

@Module({
  controllers: [GastosFederalizadosController],
  providers: [GastosFederalizadosService],
})
export class GastosFederalizadosModule {}
