import { Component, OnInit, Inject } from '@angular/core';
import { CartPageService } from '../../cart/shared/cart-page/cart-page.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrderItem } from '../../shared/models/index';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss'],
})
export class ProductDescriptionComponent implements OnInit {
  product: OrderItem;
  constructor(
    public dialogRef: MatDialogRef<ProductDescriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OrderItem,
    private cartService: CartPageService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.product = this.data;
  }
  addQty(item: OrderItem) {
    this.cartService.addQty(item);
    this.snackBar.open('Successfully added to Cart!', null, {
      duration: 2000,
    });
  }

  removeQty(item: OrderItem) {
    this.cartService.removeQty(item);
    this.snackBar.open('Successfully removed from Cart!', null, {
      duration: 2000,
    });
  }

  addCart(item: OrderItem) {
    this.cartService.addCart(item);
    this.snackBar.open('Successfully added to Cart!', null, {
      duration: 2000,
    });
  }

  close() {
    this.dialogRef.close();
  }
}
