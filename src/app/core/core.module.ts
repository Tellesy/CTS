import { NgModule } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
 providers: [],
 declarations: [HeaderComponent],
 imports: [
  NgbModule

],
exports:[
  HeaderComponent,
]
})
export class CoreModule { }
