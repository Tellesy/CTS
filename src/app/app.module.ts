import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import Modules
// 1) Featured Modules

import {AuthModule} from './modules/auth/auth.module';
// Core
import {CoreModule} from './core/core.module';

// 3) Shared Modules

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
