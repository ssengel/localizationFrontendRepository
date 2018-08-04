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

    const token = JSON.parse(localStorage.getItem('token'));

    if (token) {
      const tokenDate = token.createdAt + token.expiresIn*1000;
      const now = new Date().getTime();
      
      if (tokenDate > now)
        return true;
      else {
        localStorage.clear();
        this.router.navigate(['login'])
        return false;
      }
    } else {
      localStorage.clear();
      this.router.navigate(['login'])
      return false;
    }

  }
}
