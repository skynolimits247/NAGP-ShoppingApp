import { Injectable, EventEmitter } from '@angular/core';
import { Address, User, OrderItem } from '../../../shared/models/index';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root',
})
export class CartPageService {
  $CartUpdated = new EventEmitter();
  newCart: OrderItem[];
  orderId;
  cartItems: OrderItem[] = [];

  shippingAddress: Address = {
    addressType: 'SHIPPING',
    houseNo: '172',
    street: '2289  Weston Rd',
    city: 'Toronto',
    zipCode: 'M9N 1G4',
    state: 'Ontario',
    country: 'Canada',
  };
  billingAddress: Address = {
    addressType: 'BILLING',
    houseNo: '172',
    street: '2289  Weston Rd',
    city: 'Toronto',
    zipCode: 'M9N 1G4',
    state: 'Ontario',
    country: 'Canada',
  };

  user: User = {
    firstMidName: 'Lonnie T.',
    lastName: 'Madrigal',
    contactNumber: '416-244-8711',
    email: 'LonnieTMadrigal@armyspy.com',
  };

  storeList = [
    {
      sourceType: 'DC',
      source: 'France',
      sourceCode: 'FRA',
      productCode: '000000000000000186',
      availableQuantity: 400,
      id: 46,
    },
    {
      sourceType: 'STR',
      source: 'Austria',
      sourceCode: 'AUT',
      productCode: '000000000000000186',
      availableQuantity: 240,
      id: 48,
    },
  ];
  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  getShippingAddress() {
    return this.shippingAddress;
  }

  getBillingAddress() {
    return this.billingAddress;
  }

  getUserInfo() {
    return this.user;
  }

  updateBillingAddress(address: Address) {
    this.billingAddress = address;
    return true;
  }

  updateShippingAddress(address: Address) {
    this.shippingAddress = address;
    return true;
  }

  updateUser(user: User) {
    this.user = user;
    return true;
  }

  getCart() {
    return this.cartItems;
  }

  removeItemCart(item: OrderItem) {
    this.cartItems = this.cartItems.filter(
      (element) => element.productCode !== item.productCode
    );
    this.$CartUpdated.emit(this.cartItems);
  }

  addQty(item: OrderItem) {
    item.requiredQuantity += 1;
    this.$CartUpdated.emit(this.cartItems);
  }

  removeQty(item: OrderItem) {
    if (item.requiredQuantity - 1 > 0) {
      item.requiredQuantity -= 1;
      this.$CartUpdated.emit(this.cartItems);
    } else {
      this.removeItemCart(item);
    }
  }
  addCart(item: OrderItem) {
    item.requiredQuantity = 1;
    this.cartItems.push(item);
    this.$CartUpdated.emit(this.cartItems);
  }

  resetCart() {
    this.newCart = [];
    this.cartItems = [];
    this.$CartUpdated.emit(this.cartItems);
  }

  getShipingDate() {
    const dte = new Date();
    dte.setDate(dte.getDate() + 2);
    return this.datePipe.transform(dte, 'yyyy-MM-dd');
  }
  checkout() {
    this.cartItems = [];
    this.$CartUpdated.emit(this.cartItems);
  }
}
