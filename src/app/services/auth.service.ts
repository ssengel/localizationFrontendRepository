import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { ErrorHandlerService } from './error-handler.service';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  private readonly url = "http://localhost:8080/auth/"

  constructor(
    private http: HttpClient,
    private router: Router,
    private errorHandlerService: ErrorHandlerService
  ) { }


  register(user: any) {
    return this.http.post<User>(this.url + 'register', user)
      .catch(this.errorHandlerService.handleError)
  }

  login(user: any) {
    return this.http.post<User>(this.url + 'login', user)
      .catch(this.errorHandlerService.handleError)
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    }
    else {
      this.router.navigate(['login'])
      return false;
    }
  }


}
