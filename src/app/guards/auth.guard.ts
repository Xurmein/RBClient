import { Injectable } from '@angular/core';
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
    return this.authenticationService.isAdmin;
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
   return false;*/
  }
}
