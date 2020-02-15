import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import {AuthService} from '../services/authentication/auth.service';
import {IAuth} from '../interfaces/auth';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private canActivateFlag: boolean;
  constructor(private authService: AuthService, private router: Router) { }
  async verfiy() {
      return true;
  }
  async canActivate(): Promise<boolean> {


    // await this.verfiy().then(() => { this.return true});
     this.canActivateFlag = false;
     const token = localStorage.getItem('token');
     if (token) {
       await this.authService.verifyToken(token).toPromise().then((data) => {
          if (data.status === 200) {
          this.canActivateFlag = true;
          // Always update token
          this.authService.setToken(data.body.accessToken);
          } else {
            this.canActivateFlag = false;
           }
      }
      ).catch((e) => { this.canActivateFlag = false; });
     } else {
      this.canActivateFlag = false;
     }
     if (!this.canActivateFlag) {
      this.router.navigate(['/login']);
     }
     return this.canActivateFlag;
  }
}
