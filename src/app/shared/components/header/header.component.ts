import { Component, OnInit } from '@angular/core';

// For MDB Angular Free


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  fullname = "NA";
  constructor() { }

  ngOnInit() {
  }

}
