import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule  } from '@angular/common/http';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { AddressComponent } from './address/address.component';
@NgModule({
  declarations: [CartComponent, CartPageComponent, OrderSummaryComponent, CartSummaryComponent, AddressComponent],
  imports: [CommonModule, CartRoutingModule, SharedModule, HttpClientModule],
  providers: [DatePipe]
})
export class CartModule {}
