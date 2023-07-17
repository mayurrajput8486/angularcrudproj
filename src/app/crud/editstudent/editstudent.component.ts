import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent {

  editData: any;
  updateForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    username: new FormControl(),
    password: new FormControl()
  })


  constructor(private location: Location, private c: CommonService, private route: Router) {

  }
  ngOnInit(): void {

    this.editData = this.location.getState();
    this.updateForm.patchValue({
      id: this.editData.id,
      name: this.editData.name,
      username: this.editData.username,
      password: this.editData.password



    })
  }
  update() {
    this.c.updateStudent(this.updateForm.value).subscribe();
    this.route.navigate(['view']);
  }
}
