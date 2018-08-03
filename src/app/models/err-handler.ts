import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

export class ErrHandler{
    router: Router;
    
    constructor( routeR: Router){
        this.router = routeR;
    }

    handleError(error:Response){
        if(error.status === 401) {
          this.router.navigate(['/login']);
          return Observable.throw('Yetkilendirme Hatasi');
        }
        else if(error.status === 403) {
          this.router.navigate(['']);
          return Observable.throw('Yetki Seviyeniz Yeterli Degil')
        }
        else return Observable.throw('Beklenmedik bir hata olustu !!')
      }
}