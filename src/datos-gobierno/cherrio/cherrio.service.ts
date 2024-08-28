import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { catchError, firstValueFrom, Observable } from 'rxjs';

@Injectable()
export class CherrioService {
    constructor(private readonly httpService: HttpService) {}

    findAll() {
        this.httpService.get('https://www.cmsadmin.hacienda.gob.mx/Datos-Abiertos').subscribe(res => {
            console.log(res);
        });
    }

    // async findAll(): Promise<any> {
    //     const { data } = await firstValueFrom(
    //       this.httpService.get<any>('https://example.com').pipe(
    //         catchError((error: AxiosError) => {
    //         //   this.logger.error(error.response.data);
    //           throw 'An error happened!';
    //         }),
    //       ),
    //     );
    //     return data;
    //   }
}
