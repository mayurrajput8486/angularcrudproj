import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  loginForm = new FormGroup(
    {
      username: new FormControl (),
      password: new FormControl ()
    }
  )

  constructor (private route:Router) {}

  login () {
    if(this.loginForm.controls.username.value=='ADMIN' &&
     this.loginForm.controls.password.value=='ADMIN'){
    this.route.navigate(['view']);
    }
    alert("Admin Log In Successfull");

  }
}
