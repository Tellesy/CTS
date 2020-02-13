import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAuth} from '../../interfaces/auth'; 



@Injectable(
  { providedIn: 'root'}
)
export class AuthService {

  public test: string;
  constructor(private http: HttpClient) {

   }

   login(username,password): Observable<IAuth> 
   {  
      this.test = username;
      console.log("test " + this.test);
      console.log(username + " " + password);
      return null;
   }
}
