import { Directive, ElementRef, OnInit } from '@angular/core';
import { User } from '../models/user';

@Directive({
  selector: '[appAuth]'
})
export class AuthDirective implements OnInit {

  private currentUser;
  
  constructor(private el: ElementRef) {}

  ngOnInit(){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.checkRole();
  }

  checkRole(){
    const role = this.currentUser.user.role;
    if(!(role === 'admin')){
      this.el.nativeElement.style.display = "none";
    }
  }

}
