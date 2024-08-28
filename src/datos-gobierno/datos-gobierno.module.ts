import { Module } from '@nestjs/common';
import { DatosGobiernoService } from './datos-gobierno.service';
import { DatosGobiernoController } from './datos-gobierno.controller';
import { HttpModule } from '@nestjs/axios';
import { CherrioService } from './cherrio/cherrio.service';

@Module({
  imports: [HttpModule],
  controllers: [DatosGobiernoController],
  providers: [DatosGobiernoService, CherrioService],
})
export class DatosGobiernoModule {}
