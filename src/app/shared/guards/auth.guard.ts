import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //constructor(private authService: AuthService, private router: Router) { }
  constructor(private router: Router) { }
  canActivate() {
    // if (this.authService.isLoggedIn()) {
    //   this.router.navigate(['/']);
    // }
    // return !this.authService.isLoggedIn();
    console.log("Hey i'm in log");
    if (true) {
      this.router.navigate(['/login']);
    }
    return true;
  }

}
