import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



// Import Modules
// 1) Featured Modules
import {AuthModule} from './modules/auth/auth.module';
import {HomeModule} from './modules/home/home.module';


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
    HomeModule,
   // CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
