import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Role } from '../models/role.model';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _dbUrl = 'http://localhost:3000/'

  constructor(private _http: HttpClient) { }

  getLogin(role: Role): Observable<Role[]> {
    return this._http.post<Role[]>(this._dbUrl, role)
  }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this._dbUrl)
  }

  /*makeUser(user: User): Observable<User[]> {
    return this._http.post<User[]>(this._dbUrl, user, httpOptions)
  }*/
}