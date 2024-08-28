import { Test, TestingModule } from '@nestjs/testing';
import { ScrapingExamplesController } from './scraping-examples.controller';
import { ScrapingExamplesService } from './scraping-examples.service';

describe('ScrapingExamplesController', () => {
  let controller: ScrapingExamplesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScrapingExamplesController],
      providers: [ScrapingExamplesService],
    }).compile();

    controller = module.get<ScrapingExamplesController>(ScrapingExamplesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
