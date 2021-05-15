import { Component, OnInit, Input } from '@angular/core';
import { CartPageService } from '../shared/cart-page/cart-page.service';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Address } from '../../shared/models/index';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  billing: FormGroup;
  shipping: FormGroup;
  defaultShippingAddress: Address;
  defaultBillingAddress: Address;
  billingAddress: FormGroup;
  stringPattern: any = '[a-zA-Z ]*';
  numberCheck: any = '^[0-9]*$';

  constructor(private fb: FormBuilder, private cartService: CartPageService) {
    this.defaultBillingAddress = this.cartService.getBillingAddress();
    this.defaultShippingAddress = this.cartService.getShippingAddress();

  }

  ngOnInit() {
    this.createBillingAddressForm();
    this.createShippingAddressForm();
  }
  createBillingAddressForm() {
    this.billing = this.fb.group({
      city: [
        this.defaultBillingAddress.city,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.stringPattern)
        ])
      ],
      country: [
        this.defaultBillingAddress.country,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.stringPattern)
        ])
      ],
      state: [
        this.defaultBillingAddress.state,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.stringPattern)
        ])
      ],
      houseNo: [
        this.defaultBillingAddress.houseNo,
        Validators.compose([Validators.required])
      ],
      zipCode: [
        this.defaultBillingAddress.zipCode,
        Validators.compose([Validators.required])
      ],
      street: [
        this.defaultBillingAddress.street,
        Validators.compose([Validators.required])
      ]
    });
  }

  createShippingAddressForm() {
    this.shipping = this.fb.group({
      city: [
        this.defaultShippingAddress.city,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.stringPattern)
        ])
      ],
      country: [
        this.defaultShippingAddress.country,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.stringPattern)
        ])
      ],
      state: [
        this.defaultShippingAddress.state,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.stringPattern)
        ])
      ],
      houseNo: [
        this.defaultShippingAddress.houseNo,
        Validators.compose([Validators.required])
      ],
      zipCode: [
        this.defaultShippingAddress.zipCode,
        Validators.compose([Validators.required])
      ],
      street: [
        this.defaultShippingAddress.street,
        Validators.compose([Validators.required])
      ]
    });
  }

  reserve() {
    this.cartService.shippingAddress = this.cartService.billingAddress = this.billing.value;
  }
}
