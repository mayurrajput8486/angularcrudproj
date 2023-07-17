import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private c:CommonService, private route:Router) {

  }
  regForm = new FormGroup({
    name: new FormControl(),
    username: new FormControl(),
    password: new FormControl()

  })

  reg() {
    this.c.saveStudent(this.regForm.value).subscribe();
    alert("saved");
    // alert(this.regForm.value)
    this.route.navigate(['login']);
  }
}
