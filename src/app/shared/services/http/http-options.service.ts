import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpOptionsService {

   private url = 'http://localhost:3000/api/v1';
   private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Token':   'my-auth-token'
    })
  };
  constructor() { }

  getURL() {
    return this.url;
  }

  setAccessTokenInHeader(token){
    this.httpOptions.headers = this.httpOptions.headers.set('Access-Token', token);
  }
  getHTTPOptions() {
    return this.httpOptions;
  }
  
}
