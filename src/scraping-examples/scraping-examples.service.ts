import { Injectable } from '@nestjs/common';
import { CreateScrapingExampleDto } from './dto/create-scraping-example.dto';
import { UpdateScrapingExampleDto } from './dto/update-scraping-example.dto';

@Injectable()
export class ScrapingExamplesService {
  create(createScrapingExampleDto: CreateScrapingExampleDto) {
    return 'This action adds a new scrapingExample';
  }

  findAll() {
    return `This action returns all scrapingExamples`;
  }

  findOne(id: number) {
    return `This action returns a #${id} scrapingExample`;
  }

  update(id: number, updateScrapingExampleDto: UpdateScrapingExampleDto) {
    return `This action updates a #${id} scrapingExample`;
  }

  remove(id: number) {
    return `This action removes a #${id} scrapingExample`;
  }
}
