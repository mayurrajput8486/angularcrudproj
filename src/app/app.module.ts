import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './crud/home/home.component';
import { LogInComponent } from './crud/log-in/log-in.component';
import { RegisterComponent } from './crud/register/register.component';
import { ListstudentComponent } from './crud/liststudent/liststudent.component';
import { EditstudentComponent } from './crud/editstudent/editstudent.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    RegisterComponent,
    ListstudentComponent,
    EditstudentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
