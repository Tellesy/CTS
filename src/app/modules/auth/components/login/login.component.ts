import * as core from '@angular/core';



@core.Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements core.OnInit {

varr = 'FF';


  constructor() { }

  ngOnInit() {
  }

  fun(e)
  {
    this.varr = e.target.value;
  }

}
