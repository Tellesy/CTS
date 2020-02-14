import * as core from '@angular/core';
import {AuthService} from '../../../../shared/services/authentication/auth.service';


@core.Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements core.OnInit {

username: string;
password: string;


  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  login()
  {
    this.authservice.login(this.username, this.password).subscribe(data => {
      if(data.status == 201)
      {
        localStorage.setItem('token', data.body.accessToken);
        console.log("Good");
      }
    });
  }

}
