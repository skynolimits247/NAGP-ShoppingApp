import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginCanActivateService implements CanActivate {
  isLoggedin = false;
  constructor(
    private router: Router
  ) { }

      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
      let temp = (localStorage.getItem('user-info'));
      temp = JSON.parse(temp);
      if (temp === null || temp === undefined) {
        this.isLoggedin = false;
        this.router.navigate(['login']);
        return false;
      } else {
        this.isLoggedin = true;
        return true;
      }
    }

    loginStatus() {
       let temp = localStorage.getItem('user-info');
       temp = JSON.parse(temp);
       if (temp === null || temp === undefined) {
         return false;
       } else {
         this.isLoggedin = true;
         return true;
       }
    }

    login() {
      let temp = localStorage.getItem('user-info');
      temp = JSON.parse(temp);
      if (temp === null || temp === undefined) {
        this.isLoggedin = false;
        this.router.navigate(['login']);
      }
    }
}
