// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { HeaderComponent } from './header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HeaderRoutingModule} from './header-routing.module';

// import headers
import {AdminHeaderComponent} from '../AdminHeader/adminHeader.component';


@NgModule({
 imports:      [ NgbModule, HeaderRoutingModule],
 declarations: [ HeaderComponent, AdminHeaderComponent ],
 exports:      [ HeaderComponent, AdminHeaderComponent
                 ]
})
export class HeaderModule { }
