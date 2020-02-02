import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import {UserService} from '../services/user.service';
import {IUser} from '../interfaces/user';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    x: IUser;
  //constructor(private authService: AuthService, private router: Router) { }
  constructor(private UserService: UserService, private router: Router) { }
  canActivate() {
    // if (this.authService.isLoggedIn()) {
    //   this.router.navigate(['/']);
    // }
    // return !this.authService.isLoggedIn();

  this.UserService.getUser().subscribe(data => this.x = data);
   console.log(this.x);
    console.log("Hey i'm in log");
    if (true) {
      this.router.navigate(['/login']);
    }
    return true;
  }

}
