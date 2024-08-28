import { Test, TestingModule } from '@nestjs/testing';
import { CherrioService } from './cherrio.service';

describe('CherrioService', () => {
  let service: CherrioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CherrioService],
    }).compile();

    service = module.get<CherrioService>(CherrioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
