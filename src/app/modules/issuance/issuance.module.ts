import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderModule} from '../../shared/components/header/header.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from '../../shared/shared.module';


import {PTSIssueComponent} from './PTS_issue/PTS_issue.component';

//Services
import {CustomerService} from '../../shared/services/customer/customer.service'


@NgModule({
  declarations: [PTSIssueComponent,
  ],
  providers: [CustomerService],
  imports: [
    CommonModule,
    SharedModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
  ]
})
export class IssuanceModule { }
