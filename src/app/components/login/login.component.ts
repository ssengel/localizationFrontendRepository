import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(username: HTMLInputElement, password: HTMLInputElement) {
    const obj = {
      username: username.value,
      password: password.value
    }

    this.authService.login(obj)
      .subscribe((res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('userId', res.user._id);
        
        this.router.navigate(['']);
      });
  }
}
