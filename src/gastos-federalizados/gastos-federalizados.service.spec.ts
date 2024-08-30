import { Test, TestingModule } from '@nestjs/testing';
import { GastosFederalizadosService } from './gastos-federalizados.service';

describe('GastosFederalizadosService', () => {
  let service: GastosFederalizadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GastosFederalizadosService],
    }).compile();

    service = module.get<GastosFederalizadosService>(GastosFederalizadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
