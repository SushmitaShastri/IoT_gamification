import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');
  message='';
  value = '';
  pass = '';
  isActive = true;
  constructor(
    public router: Router
  ) {}

  ngOnInit() {
  }
fieldTextType!: boolean;


toggleFieldTextType() {
  this.fieldTextType = !this.fieldTextType;
}
  submit () {
    if(this.email.value=="sushu" && this.password.value=="sushu")
    {
      this.router.navigateByUrl('dashboard');
    }
    else
    {
      alert("invalid credentials!");
      this.email.setValue('');
      this.password.setValue('');
    }
  }
}
