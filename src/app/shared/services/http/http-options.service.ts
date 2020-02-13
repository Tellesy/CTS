import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpOptionsService {

   public uri = '';
   
   private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Token':   'my-auth-token'
    })
  };
  constructor() { }
}
