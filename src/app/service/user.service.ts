import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../ViewModels/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  baseURL: string = "https://localhost:44306/";
  headerOptions: HttpHeaders;
  constructor(private http: HttpClient) { 
    this.headerOptions = new HttpHeaders({ 
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT', });
  }

  addUser(user: UserModel): Observable<any>{
    const body = JSON.stringify(user);
    return this.http.post<any>(this.baseURL + 'User/CreateUser', body, {
           headers: this.headerOptions
    })
  }

  getUsers(): Observable<any>{
    return this.http.get<any>(this.baseURL + 'User/GetUsers', {
           headers: this.headerOptions
    })
  }

  updateUser(user: UserModel): Observable<any> {
    const body = JSON.stringify(user);
    return this.http.post<any>(this.baseURL + 'User/UpdateUser', body, {
           headers: this.headerOptions
    })
  }

  removeUser(user: UserModel): Observable<any> {
    const body = JSON.stringify(user);
    return this.http.post<any>(this.baseURL + 'User/RemoveUser', body, {
           headers: this.headerOptions
    })
  }
}