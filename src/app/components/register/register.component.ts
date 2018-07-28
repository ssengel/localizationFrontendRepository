import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  register(username: HTMLInputElement, email: HTMLInputElement, password: HTMLInputElement){
    
    const user = {
      username: username.value,
      email: email.value,
      password: password.value
    };

    this.authService.register(user).subscribe(resp => console.log(resp));

  }

}
