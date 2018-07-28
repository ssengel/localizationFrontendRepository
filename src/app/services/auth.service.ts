import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  private readonly url = "http://localhost:8080/auth/"

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');

    if (token)
      return true;
    else{
      this.router.navigate(['login'])
      return false;
    }
  }

  register(user: any) {
    return this.http.post(this.url + 'register', user);
  }

  login(user: any) {
    return this.http.post(this.url + 'login', user);
  }


}
