import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationGuard {

  constructor(private router: Router) { }

  checkAccount() {
    if (sessionStorage.getItem("account") === "spacetravel") {
      this.router.navigate(["/account"])
      return true
    } else if (sessionStorage.getItem("account") === "admin") {
      this.router.navigate(["/aprofile"])
      return true
    } else {
      this.router.navigate(["/account"])
      return true
    }
  }
}



/*import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
//import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    public authenticationService: AuthenticationService
  ) { }
  canActivate() {
    return this.authenticationService.login;
    /*route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)/*: Observable<boolean> | Promise<boolean> | boolean {
      const currentUser = this.authenticationService.currentUserValue;
      if (currentUser) {
        if (route.data.role && route.data.role.indexOf(currentUser.role) === -1){
          this.router.navigate(['/']);
          return false;
        }
        return true;
      }
   this.router.navigate(['/login'], { queryParams: {returnUrl: state.url }});
   return false;
  }
}*/
