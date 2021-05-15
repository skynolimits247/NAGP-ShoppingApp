import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartComponent } from './cart.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';


const routes: Routes = [
  {path: 'checkout', component: OrderSummaryComponent},
  {
    path: '',
    component: CartComponent,
    children: [
      {
        path: '',
        component: CartPageComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
