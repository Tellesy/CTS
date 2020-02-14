import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAuth} from '../../interfaces/auth'; 
import {HttpOptionsService} from '../http/http-options.service';






@Injectable(
  { providedIn: 'root'}
)
export class AuthService {

  
  public token: string;
  constructor(private http: HttpClient, private httpOptionsService: HttpOptionsService) {

   }

   login(username,password): Observable<IAuth> 
   {  

    return this.http.post<IAuth>(this.httpOptionsService.getURL()+'/login', {username: username, password: password}, this.httpOptionsService.getHTTPOptions())
    .pipe(
      
    );
   }
}
