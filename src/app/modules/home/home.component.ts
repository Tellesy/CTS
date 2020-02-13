import { Component, OnInit } from '@angular/core';

//test delete after

import {AuthService} from '../../shared/services/authentication/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit() {
    console.log("HOME HELLO")
    console.log(this._auth.test);
    
  }

}
