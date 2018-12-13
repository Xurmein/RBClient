import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Admin } from '../models/admin.model'
import  APIURL  from 'environments/environment';


@Injectable()
export class AdminService {
  constructor(private http: HttpClient) { }

register(admin: object): Observable<Admin> {
    return this.http.post<Admin>(`${APIURL}/user/register/admin`, admin)
}

  login(admin: object): Observable<Admin> {
    return this.http.post<Admin>(`${APIURL}/user/login`, admin)
  }
}