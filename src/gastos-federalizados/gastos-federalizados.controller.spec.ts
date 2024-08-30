import { Test, TestingModule } from '@nestjs/testing';
import { GastosFederalizadosController } from './gastos-federalizados.controller';
import { GastosFederalizadosService } from './gastos-federalizados.service';

describe('GastosFederalizadosController', () => {
  let controller: GastosFederalizadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GastosFederalizadosController],
      providers: [GastosFederalizadosService],
    }).compile();

    controller = module.get<GastosFederalizadosController>(GastosFederalizadosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
