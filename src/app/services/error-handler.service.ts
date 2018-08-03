import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw'
import { Router } from '@angular/router';

@Injectable()
export class ErrorHandlerService{

  constructor() { }

  handleError(error:Response){
    if(error.status === 401) {
      return Observable.throw('Yetkilendirme Hatasi');
    }
    else if(error.status === 403) {
      return Observable.throw('Yetki Seviyeniz Yeterli Degil')
    }
    else return Observable.throw('Beklenmedik bir hata olustu !!')
  }

}
