import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorHandlerService {

  constructor() { }

  handleError(error: Response) {
    if (error.status === 401) {
      return throwError('Yetkilendirme Hatasi');
    }
    else if (error.status === 403) {
      return throwError('Yetki Seviyeniz Yeterli Degil')
    }
    else return throwError('Beklenmedik bir hata olustu !!')
  }

}
