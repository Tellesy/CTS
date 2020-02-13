import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAuth} from '../../interfaces/auth'; 






@Injectable(
  { providedIn: 'root'}
)
export class AuthService {

  
  public token: string;
  constructor(private http: HttpClient) {

   }

   login(username,password): Observable<IAuth> 
   {  
      this.token = username;
     
      console.log(username + " " + password);
      return null;
   }
}
