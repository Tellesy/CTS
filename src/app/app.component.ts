import { Component } from '@angular/core';
//import { HostListener } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CTS';

  
  // @HostListener("window:beforeunload",["$event"])
  // clearLocalStorage(event){
  //     localStorage.clear();
  // }
}
