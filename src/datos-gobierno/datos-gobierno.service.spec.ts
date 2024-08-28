import { Test, TestingModule } from '@nestjs/testing';
import { DatosGobiernoService } from './datos-gobierno.service';

describe('DatosGobiernoService', () => {
  let service: DatosGobiernoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatosGobiernoService],
    }).compile();

    service = module.get<DatosGobiernoService>(DatosGobiernoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
