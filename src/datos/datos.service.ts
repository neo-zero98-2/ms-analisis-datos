import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class DatosService {
    private cats: Cat[] = [];

    findAll(): Cat[]{
        return this.cats;
    }

    create(cat:Cat){
        this.cats = [ ...this.cats, cat];
    }

}
