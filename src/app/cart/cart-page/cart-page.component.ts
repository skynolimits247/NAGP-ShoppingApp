import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, Form } from '@angular/forms';
import { Address, User, OrderItem } from '../../shared/models/index';
import { CartPageService } from '../shared/cart-page/cart-page.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  order = {
    originalOrderNumber: 14,
    frontOfficeOrderNumber: 26,
    customerId: 1,
    orderType: 'EXPRESS',
    sourceChannelCode: 'FRONTOFFICE',
    distributionCenterCode: '',
    customerRequestedDate: null,
    shippingAddress: null,
    billingAddress: null,
    orderPriorityCode: 'MEDIUM',
    LineItem: []
  };

  displayedColumns: string[] = [
    'imageUrl',
    'productName',
    'requiredQuantity',
    'unitPrice',
    'totalPrice',
    'actions'
  ];
  displayedStoreColumns: string[] = [
    'imageUrl',
    'productName',
    'requiredQuantity',
    'totalPrice',
    'actions',
    'storeList'
  ];
  billingAddress: FormGroup;
  userCart: OrderItem[];
  shippingAddress: FormGroup;
  userForm: FormGroup;
  storeForm: FormGroup;
  defaultShippingAddress: Address;
  defaultBillingAddress: Address;
  defaultUser: User;
  stringPattern: any = '[a-zA-Z ]*';
  numberCheck: any = '^[0-9]*$';
  isLinear = false;
  dateVisibility = 'hidden';
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  deliveryMode: string = null;
  today = new Date();
  shippingDate;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private datePipe: DatePipe,
    private cartService: CartPageService,
    private snackBar: MatSnackBar
  ) {
    this.defaultBillingAddress = this.cartService.getBillingAddress();
    this.defaultShippingAddress = this.cartService.getShippingAddress();
    this.defaultUser = this.cartService.getUserInfo();
    this.today.setDate(this.today.getDate() + 2);
    this.shippingDate = this.datePipe.transform(this.today, 'yyyy-MM-dd');
    this.today = new Date();
}

  ngOnInit() {
    this.userCart = this.cartService.getCart();
    this.createUserForm();
    this.cartService.$CartUpdated.subscribe((res: OrderItem[]) => {
      this.userCart = res;
    });
    this.isLinear = true;
  }


  createUserForm() {
    this.userForm = this.fb.group({
      firstMidName: [
        this.defaultUser.firstMidName,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50)
        ])
      ],
      lastName: [
        this.defaultUser.lastName,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50)
        ])
      ],
      contactNumber: [
        this.defaultUser.contactNumber,
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(12)
        ])
      ],
      email: [
        this.defaultUser.email,
        Validators.compose([Validators.required, Validators.email])
      ]
    });
  }

  removeItem(item: OrderItem) {
    this.cartService.removeItemCart(item);
    this.snackBar.open('Successfully removed from Cart!', null, {
      duration: 2000
    });
  }

  addQty(item: OrderItem) {
    this.cartService.addQty(item);
    this.snackBar.open('Successfully added to Cart!', null, {
      duration: 2000
    });
  }

  removeQty(item: OrderItem) {
    this.cartService.removeQty(item);
    this.snackBar.open('Successfully removed from Cart!', null, {
      duration: 2000
    });
  }

  createOrder() {
    this.cartService.checkout();
    this.snackBar.open('Order placed successfully!', null, {
      duration: 2000
    });
    this.router.navigate(['cart/checkout']);
  }

  toTop() {
    window.scrollTo(0, 0);
  }

  userSubmit() {
    this.cartService.user = this.defaultUser = this.userForm.value;
  }
}

