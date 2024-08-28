import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatosController } from './datos/datos.controller';
import { DatosService } from './datos/datos.service';
import { EjemploModule } from './ejemplo/ejemplo.module';
import { DatosGobiernoModule } from './datos-gobierno/datos-gobierno.module';
import { ScrapingExamplesModule } from './scraping-examples/scraping-examples.module';

@Module({
  imports: [EjemploModule, DatosGobiernoModule, ScrapingExamplesModule],
  controllers: [AppController, DatosController],
  providers: [AppService, DatosService],
})
export class AppModule {}
