import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { HeaderComponent } from './header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HeaderRoutingModule} from './header-routing.module';

@NgModule({
 imports:      [ CommonModule, NgbModule, HeaderRoutingModule],
 declarations: [ HeaderComponent ],
 exports:      [ HeaderComponent,
                 CommonModule]
})
export class HeaderModule { }
