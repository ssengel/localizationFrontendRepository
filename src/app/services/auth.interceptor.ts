import { Injectable, OnInit } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router:Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const newReq = req.clone({
            headers: req.headers.set('x-access-token', localStorage.getItem('token') || '')
        })
        
        return next.handle(newReq)
            // .do(
            //     (succ:HttpResponse<any>) => {
            //         console.log(succ.body);
                    
            //     },
            //     (err:HttpErrorResponse) => {
            //         if(err.status === 401){
            //             localStorage.clear();
            //             this.router.navigate(['login'])
            //         }
            //     }
            // )
    }
}