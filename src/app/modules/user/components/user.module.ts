import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {MaterialModule} from '../../../core/material.module';

//import {UserRoutingModule} from './user-routing.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

import {AuthService} from '../../../shared/services/authentication/auth.service';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  exports: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent]
})
export class UserModule { }
