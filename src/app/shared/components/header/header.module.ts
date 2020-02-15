// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { HeaderComponent } from './header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HeaderRoutingModule} from './header-routing.module';

@NgModule({
 imports:      [ NgbModule, HeaderRoutingModule],
 declarations: [ HeaderComponent ],
 exports:      [ HeaderComponent
                 ]
})
export class HeaderModule { }
