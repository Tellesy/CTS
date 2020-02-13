import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAuth} from '../../interfaces/auth'; 


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

   }

   login(username,password): Observable<IAuth> 
   {
     
      return this.http.post()
   }
}
