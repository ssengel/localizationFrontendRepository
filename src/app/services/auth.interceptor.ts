import { Injectable, OnInit } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private token = '';
    constructor(private router:Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const tokenObj = localStorage.getItem('token')

        if(tokenObj){
            this.token = JSON.parse(tokenObj).token;
        }
        
        const newReq = req.clone({
            headers: req.headers.set('x-access-token', this.token)
        })
        
        return next.handle(newReq)
            .do(
                (succ:HttpResponse<any>) => {
                    console.log(succ.body);
                },
                (err:HttpErrorResponse) => {
                    if(err.status === 403){
                        this.router.navigate(['']);
                    }
                }
            )
    }
}