import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';




const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    "Authorization": localStorage.getItem("token")
  })
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _dbUrl = 'https://cosmoknotserver.herokuapp.com/'

  constructor(private http: HttpClient) { }

  getLogin(): Observable<User[]> {
    return this.http.post<User[]>(this._dbUrl, User)
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._dbUrl)
  }

  /*makeUser(user: User): Observable<User[]> {
    return this._http.post<User[]>(this._dbUrl, user, httpOptions)
  }*/
}
