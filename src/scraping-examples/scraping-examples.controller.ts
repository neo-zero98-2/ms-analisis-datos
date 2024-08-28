import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScrapingExamplesService } from './scraping-examples.service';
import { CreateScrapingExampleDto } from './dto/create-scraping-example.dto';
import { UpdateScrapingExampleDto } from './dto/update-scraping-example.dto';

@Controller('scraping-examples')
export class ScrapingExamplesController {
  constructor(private readonly scrapingExamplesService: ScrapingExamplesService) {}

  @Post()
  create(@Body() createScrapingExampleDto: CreateScrapingExampleDto) {
    return this.scrapingExamplesService.create(createScrapingExampleDto);
  }

  @Get()
  findAll() {
    return this.scrapingExamplesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scrapingExamplesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScrapingExampleDto: UpdateScrapingExampleDto) {
    return this.scrapingExamplesService.update(+id, updateScrapingExampleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scrapingExamplesService.remove(+id);
  }
}
