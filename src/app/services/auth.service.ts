
import {catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { ErrorHandlerService } from './error-handler.service';

@Injectable()
export class AuthService {

  private readonly url = "http://localhost:8080/auth/"

  constructor(
    private http: HttpClient,
    private router: Router,
    private errorHandlerService: ErrorHandlerService
  ) { }


  register(user: any) {
    return this.http.post<User>(this.url + 'register', user).pipe(
      catchError(this.errorHandlerService.handleError))
  }

  login(user: any) {
    return this.http.post<User>(this.url + 'login', user).pipe(
      catchError(this.errorHandlerService.handleError))
  }

  isLoggedIn(): boolean {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if(currentUser){
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
