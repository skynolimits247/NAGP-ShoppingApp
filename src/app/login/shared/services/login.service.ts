import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

const usersList = [
  {
    id: 1,
    username: 'admin',
    name: 'Admin User',
    password: 'admin1234'
  }
];
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  $userLoggedIn = new EventEmitter();
  usersList = usersList;
  constructor(
    private router: Router
  ) { }

  login(username: string, password: string){
    if (username.toLowerCase() === this.usersList[0].username && password.toLowerCase() === this.usersList[0].password) {
      this.$userLoggedIn.emit(true);
      return (this.usersList[0]);
    } else {
      return (null);
    }
  }

  gotToLogin() {
    this.router.navigate(['/login']);
  }

  logOut() {
      localStorage.removeItem('user-info');
      this.$userLoggedIn.emit(false);
      this.router.navigate(['login']);
    }
}
