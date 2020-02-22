import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../core/material.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    FlexLayoutModule,
    // MatTabsModule,
    // MatFormFieldModule,
    // MatSelectModule,
    // MatDatepickerModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class SharedModule { }
