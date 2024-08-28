import { Module } from '@nestjs/common';
import { ScrapingExamplesService } from './scraping-examples.service';
import { ScrapingExamplesController } from './scraping-examples.controller';

@Module({
  controllers: [ScrapingExamplesController],
  providers: [ScrapingExamplesService],
})
export class ScrapingExamplesModule {}
