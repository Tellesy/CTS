import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderModule} from '../../shared/components/header/header.module';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {PTSIssueComponent} from './PTS_issue/PTS_issue.component';





@NgModule({
  declarations: [PTSIssueComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule
  ]
})
export class IssuanceModule { }
