import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderModule} from '../../shared/components/header/header.module';

import {PTSIssueComponent} from './PTS_issue/PTS_issue.component';





@NgModule({
  declarations: [PTSIssueComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class IssuanceModule { }
