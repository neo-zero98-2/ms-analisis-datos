import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response} from '../interfaces';
import { Response as ResponseExpress} from 'express';

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    const ctx = context.switchToHttp();
    console.log('Before...');

    return next
        .handle()
        .pipe(
            map(data => {
                const res = ctx.getResponse<ResponseExpress>();
                console.log('After...');
                return ({
                    code: res.statusCode,
                    message: 'Operación exitosa',
                    data
                })
            })
        );
  }
}