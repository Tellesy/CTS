import { Component, OnInit } from '@angular/core';
// For MDB Angular Free


@Component({
  selector: 'app-adminheader',
  templateUrl: './adminHeader.component.html',
  styleUrls: ['./adminHeader.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  fullname = "NA";
  constructor() { }

  ngOnInit() {
  }

}
