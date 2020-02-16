import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




// Import Modules
// 1) Featured Modules
import {UserModule} from './modules/user/components/user.module';
import {HomeModule} from './modules/home/home.module';
import {IssuanceModule} from './modules/issuance/issuance.module';


// Core
import {CoreModule} from './core/core.module';


// 3) Shared Modules

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services
import {HttpOptionsService} from './shared/services/http/http-options.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HomeModule,
    IssuanceModule
   // CoreModule,
  ],
  providers: [HttpOptionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
