import { PartialType } from '@nestjs/mapped-types';
import { CreateDatosGobiernoDto } from './create-datos-gobierno.dto';

export class UpdateDatosGobiernoDto extends PartialType(CreateDatosGobiernoDto) {}
