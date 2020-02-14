import * as core from '@angular/core';
import {AuthService} from '../../../../shared/services/authentication/auth.service';
import { Router } from '@angular/router';



@core.Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements core.OnInit {

username: string;
password: string;
displayMessage: boolean;
message: string;


  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
      this.displayMessage = false;
      this.message = '';

      if (!this.username || !this.password) {
      this.message = 'Please fill all the fields';
      this.displayMessage = true;
      return; }

      const isLogin =  this.authservice.loginRequest(this.username, this.password);

      this.authservice.loginRequest(this.username, this.password).subscribe(data => {
        if (data.status === 201) {
          localStorage.setItem('token', data.body.accessToken);
          this.router.navigate(['/']);
        } else {
            this.message = data.body.message;
            this.displayMessage = true;
      }
    },     err => {
            this.message = 'Can\'t reach the server';
            if (err.body.message) {
              this.message = err.body.message;
              this.displayMessage = true;
              }
                }
                  );


  }


}
