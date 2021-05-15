import { Component, OnInit } from '@angular/core';
import { CartPageService } from '../../../cart/shared/cart-page/cart-page.service';
import { OrderItem } from '../../models/index';
import { LoginCanActivateService } from '../../../login/shared/auth-guard/login-can-activate.service';
import { LoginService } from '../../../login/shared/services/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  item = 0;
  isLoggedin = false;

  constructor(
    private userCart: CartPageService,
    private loginService: LoginCanActivateService,
    private userService: LoginService
    ) {}

  ngOnInit() {
    this.loginStatus();
    this.item = this.userCart.getCart().length;
    this.userCart.$CartUpdated.subscribe((res: OrderItem[]) => {
      this.item = 0;
      this.item = res.length;
    });
    this.userService.$userLoggedIn.subscribe((res: boolean) => {
      this.isLoggedin = res;
    });
  }
 loginStatus() {
   this.isLoggedin = this.loginService.loginStatus();
 }

  logout() {
    this.userService.logOut();
  }

  login() {
    this.loginService.login();
  }
}
