import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HeaderModule} from '../../shared/components/header/header.module';




@NgModule({
 providers: [],
 declarations: [HomeComponent],
 imports: [
  NgbModule,
  HeaderModule

],
exports:[
]
})
export class HomeModule { }
