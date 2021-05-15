import { Component, OnInit, Input } from '@angular/core';
import { OrderItem } from '../../shared/models/index';
import { MatDialog } from '@angular/material';
import { ProductDescriptionComponent } from '../product-description/product-description.component';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss'],
})
export class ProductTileComponent implements OnInit {
  @Input() product: OrderItem;
  constructor(
    private dialog: MatDialog
  ) {}

  ngOnInit() {}



  productDetail(product) {
    const dialogRef = this.dialog.open(ProductDescriptionComponent, {
      width: '600px',
      data: product,
    });
  }
}
