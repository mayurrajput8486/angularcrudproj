import { Component } from '@angular/core';
import { Student } from 'src/app/model/student';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent {

  students:Student[]=[];
  constructor(private c:CommonService){

  }

  ngOnInit(): void {
    
this.c.getStudentData().subscribe((d:Student[])=>{
this.students=d;
});
  }

deleteStudent(id:number){
this.c.deleteStudent(id).subscribe();
window.location.reload();
}
}
