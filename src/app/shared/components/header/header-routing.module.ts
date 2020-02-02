
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthGuard} from '../../guards/auth.guard';

import { LoginComponent } from '../../../modules/auth/components/login/login.component';
import { HomeComponent } from '../../../modules/home/home.component';


const routes: Routes = [
    {   path: 'login',   component: LoginComponent },
    {   path: '' ,  component: HomeComponent, canActivate: [AuthGuard] },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
