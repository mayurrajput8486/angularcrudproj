import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './crud/home/home.component';
import { ListstudentComponent } from './crud/liststudent/liststudent.component';
import { EditstudentComponent } from './crud/editstudent/editstudent.component';
import { RegisterComponent } from './crud/register/register.component';
import { LogInComponent } from './crud/log-in/log-in.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'view',component:ListstudentComponent},
  {path:'edit',component:EditstudentComponent},
  {path:'login',component:LogInComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
