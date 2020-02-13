import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';       
import {IUser} from '../../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';

  private loggedUser: string;

  constructor(private http: HttpClient) {}

  getUser(): Observable<IUser> {
    return this.http.get<IUser>('http://localhost:3000/login');
  }


}
