import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Kinvey } from 'kinvey-angular2-sdk';

@Component({
  selector: 'login',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  error: Kinvey.BaseError;

  loginForm: FormGroup;

  constructor(private router: Router
  ) {
    
  }
  
  login() {
    this.error = undefined;

    Kinvey.User.login(this.username, this.password)
      .then(() => {
        this.router.navigate(['/'])
        
      })
      .catch((error: Kinvey.BaseError) => {
        this.error = error;
      });
  }

  loginWithMIC() {
    this.error = undefined;

    Kinvey.User.loginWithMIC('<micRedirectUri>')
      .then(() => this.router.navigate(['/']))
      .catch((error: Kinvey.BaseError) => {
        this.error = error;
      });
  }
}
