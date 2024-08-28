import { Test, TestingModule } from '@nestjs/testing';
import { ScrapingExamplesService } from './scraping-examples.service';

describe('ScrapingExamplesService', () => {
  let service: ScrapingExamplesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScrapingExamplesService],
    }).compile();

    service = module.get<ScrapingExamplesService>(ScrapingExamplesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
