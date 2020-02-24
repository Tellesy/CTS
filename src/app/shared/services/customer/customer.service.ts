import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

import {IAuth} from '../../interfaces/auth';
import {HttpOptionsService} from '../http/http-options.service';
import {catchError, retry} from 'rxjs/operators';







@Injectable(
  { providedIn: 'root'}
)
export class CustomerService {


  private token: string;
  public message: string;
  constructor(private http: HttpClient, private httpOptionsService: HttpOptionsService) {

   }

   
   getCustomer(customerID){
     return this.http.get<IAuth>(this.httpOptionsService.getURL()+'/auth/customer/'+customerID,
     this.httpOptionsService.getHTTPOptions()).pipe(catchError(this.handleError));
   }

   addCustomer(customer)
   {
     return this.http.post<IAuth>(this.httpOptionsService.getURL()+'/auth/customer', customer,
     this.httpOptionsService.getHTTPOptions()).pipe(catchError(this.handleError));
   }
 

   handleError(err) {
     if (err instanceof HttpErrorResponse) {
      return throwError(err.error);
     }

     return throwError(err);
   }
}
