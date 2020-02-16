
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthGuard} from '../../guards/auth.guard';

import { LoginComponent } from '../../../modules/user/components/login/login.component';
import { HomeComponent } from '../../../modules/home/home.component';
import {PTSIssueComponent} from '../../../modules/issuance/PTS_issue/PTS_issue.component';


const routes: Routes = [
    {   path: 'login',   component: LoginComponent },
    {   path: '' ,  component: HomeComponent, canActivate: [AuthGuard]},
    {   path: 'PTS_issue' ,  component: PTSIssueComponent, canActivate: [AuthGuard]},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
