import { Component, OnInit } from '@angular/core';
import { OrderItem } from '../../shared/models/order-item.model';
import { CartPageService } from '../shared/cart-page/cart-page.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {
  userCart: OrderItem[];
  displayedColumns: string[] = [
    'imageUrl',
    'productName',
    'requiredQuantity',
    'unitPrice',
    'totalPrice',
    'actions'
  ];
  constructor(
    private cartService: CartPageService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.userCart = this.cartService.getCart();
    this.cartService.$CartUpdated.subscribe((res: OrderItem[]) => {
      this.userCart = res;
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
  removeItem(item: OrderItem) {
    this.cartService.removeItemCart(item);
    this.snackBar.open('Successfully removed from Cart!', null, {
      duration: 2000
    });
  }
}
