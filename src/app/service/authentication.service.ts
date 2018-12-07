import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public URL = 'https://cosmoknotserver.herokuapp.com/user/'
  constructor(private http: HttpClient) { }

  login(Username: string, Password: string) {
    return this.http.post<any>(`${URL}login`, { username: Username, password: Password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user.sessionToken) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', JSON.stringify(user));
        }

        return user;
      }));
  }
  logout() {
    //remove user from local storage
    localStorage.removeItem('token');
  }
}