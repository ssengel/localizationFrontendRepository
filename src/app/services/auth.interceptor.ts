import { Injectable, OnInit } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router:Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if(currentUser){
            req = req.clone({
                headers: req.headers.set('x-access-token', currentUser.token)
            })
        }
        
        return next.handle(req)
            .do(
                (succ:HttpResponse<any>) => {

                },
                (err:HttpErrorResponse) => {
                    if(err.status === 403){
                        this.router.navigate(['']);
                    }
                    if(err.status === 401){
                        localStorage.removeItem('currentUser');
                        this.router.navigate(['login'])
                    }
                }
            )
    }
}