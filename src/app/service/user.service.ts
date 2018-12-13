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

  register(user: User): Observable<User> {
    return this.http.post<User>('https://cosmoknotserver.herokuapp.com/user/register/new_user', user);
  }

  login(credentials): Observable<any> {
    return this.http.post('https://cosmoknotserver.herokuapp.com/user/login', credentials);
  }
}
