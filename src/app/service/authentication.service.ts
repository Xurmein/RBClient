import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public URL = 'https://cosmoknotserver.herokuapp.com/user/'
  constructor(private http: HttpClient) { }

  login(Username: string, Password: string) {
    return this.http.post<any>(`${URL}login`, { username: Username, password: Password })
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  login(username: string, password: string) {
    return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username: username, password: password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user.sessionToken) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
<<<<<<< HEAD
          localStorage.setItem('token', JSON.stringify(user));
=======
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
>>>>>>> 279b699b41e410381f9e7ff8228a4858f29b8c9a
        }

        return user;
      }));
  }
  logout() {
    //remove user from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}