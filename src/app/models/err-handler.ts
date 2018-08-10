
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Router } from "@angular/router";

export class ErrHandler{
    router: Router;
    
    constructor( routeR: Router){
        this.router = routeR;
    }

    handleError(error:Response){
        if(error.status === 401) {
          this.router.navigate(['/login']);
          return observableThrowError('Yetkilendirme Hatasi');
        }
        else if(error.status === 403) {
          this.router.navigate(['']);
          return observableThrowError('Yetki Seviyeniz Yeterli Degil')
        }
        else return observableThrowError('Beklenmedik bir hata olustu !!')
      }
}