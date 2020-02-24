import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../core/material.module';
import { DatePipe } from '@angular/common';





@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [DatePipe]
  ,
  exports: [
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
