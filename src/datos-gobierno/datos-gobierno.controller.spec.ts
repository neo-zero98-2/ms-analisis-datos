import { Test, TestingModule } from '@nestjs/testing';
import { DatosGobiernoController } from './datos-gobierno.controller';
import { DatosGobiernoService } from './datos-gobierno.service';

describe('DatosGobiernoController', () => {
  let controller: DatosGobiernoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatosGobiernoController],
      providers: [DatosGobiernoService],
    }).compile();

    controller = module.get<DatosGobiernoController>(DatosGobiernoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
