import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private http:HttpClient) { }

  url = "http://localhost:8080/students"
  saveStudent (regForm:any) {
    return this.http.post(this.url,regForm)
  }

  getStudentData () {
    return this.http.get<Student[]>(this.url);
  }

  deleteStudent(id:number){
    return this.http.delete(this.url+"/"+id);
   }

   updateStudent(updateForm:any){
    return this.http.put(this.url+"/"+updateForm.id,updateForm);
    
      }
}
