import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { HttpClient } from '@angular/common/http';
//import { BehaviorSubject, Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from '../models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedIn = false;
  isAdmin = false;

  currentUser: User = new User();

  constructor(private userService: UserService,
    private router: Router,
    private jwtHelper: JwtHelperService) {
const token = localStorage.getItem('token');
if (token) {
const decodedUser = this.decodeUserFromToken(token);
this.setCurrentUser(decodedUser);
}
}

login(UsernameAndPassword) {
return this.userService.login(UsernameAndPassword)
.map(
res => {
localStorage.setItem('token', res.token);
const decodedUser = this.decodeUserFromToken(res.token);
this.setCurrentUser(decodedUser);
return this.loggedIn;
}
);
}

logout() {
localStorage.removeItem('token');
this.loggedIn = false;
this.isAdmin = false;
this.currentUser = new User();
this.router.navigate(['/']);
}

decodeUserFromToken(token) {
return this.jwtHelper.decodeToken(token).user;
}

setCurrentUser(decodedUser) {
this.loggedIn = true;
this.currentUser._id = decodedUser._id;
this.currentUser.username = decodedUser.username;
this.currentUser.role = decodedUser.role;
decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
delete decodedUser.role;
}

}
  /*private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  login(username: string, password: string) {
    return this.http.post<any>('https://cosmoknotserver.herokuapp.com/user/login', { username: username, password: password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }
  logout() {
    //remove user from local storage
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}*/