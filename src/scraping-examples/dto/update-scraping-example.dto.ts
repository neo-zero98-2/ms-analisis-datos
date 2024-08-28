import { PartialType } from '@nestjs/mapped-types';
import { CreateScrapingExampleDto } from './create-scraping-example.dto';

export class UpdateScrapingExampleDto extends PartialType(CreateScrapingExampleDto) {}
