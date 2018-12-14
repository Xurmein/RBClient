import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    "Authorization": sessionStorage.getItem('token')
  })
}

@Injectable({ providedIn: 'root' })

export class UserService {
  constructor(private http: HttpClient) { }

  register(user: object): Observable<User> {
    return this.http.post<User>('http://localhost:3000/user/register', user);
  }

  login(user: object): Observable<User> {
    return this.http.post<User>('http://localhost:3000/user/login', user);
  }

  get(id: string): Observable<User> {
    return this.http.get<User>("http://localhost:3000/user/:id", httpOptions);
  }

  getAll(): Observable<User> {
    return this.http.get<User>("http://localhost:3000/user/all", httpOptions);
  }
  update(user: object, id: string): Observable<User> {
    return this.http.put<User>("http://localhost:3000/user/update/:id", user, httpOptions);
  }
  delete(user: object, id: string): Observable<User> {
    return this.http.delete<User>("http//localhost:3000/user/delete/:id", user);
  }
}
