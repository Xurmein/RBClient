import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Admin } from '../models/admin.model'
//import  APIURL  from 'environments/environment';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable()
export class AdminService {
  constructor(private http: HttpClient) { }

register(admin: object): Observable<Admin> {
    return this.http.post<Admin>(`http://localhost:3000/user/register/admin`, httpOptions, admin)
}

  login(admin: object): Observable<Admin> {
    return this.http.post<Admin>(`http://localhost:3000/user/login`, httpOptions, admin)
  }
}