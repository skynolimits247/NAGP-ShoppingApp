import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { ProductPageService } from '../shared/product-page/product-page.service';
import { CartPageService } from '../../cart/shared/cart-page/cart-page.service';
import { OrderItem } from '../../shared/models/index';

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.scss"],
})
export class ProductPageComponent implements OnInit {
  userCart: OrderItem[];
  products: OrderItem[];
  ogProducts: OrderItem[];
  category = [];
  constructor(
    private cartService: CartPageService,
    private productService: ProductPageService,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit() {
    this.userCart = this.cartService.getCart();
    this.getProducts();
    this.cartService.$CartUpdated.subscribe((res: OrderItem[]) => {
      this.userCart = res;
      this.getProducts();
    });
  }

  getProducts() {
    this.products = [];
    let flag = false;
    this.products = this.productService.getProducts();
    this.ogProducts = this.products;
    this.getCategory();
    for (const product of this.products) {
      flag = false;
      for (const cart of this.userCart) {
        if (product.productCode === cart.productCode) {
          product.requiredQuantity = cart.requiredQuantity;
          flag = true;
          break;
        }
      }
      if (!flag) {
        product.requiredQuantity = 0;
      }
    }
  }

  getCategory() {
    this.category = [];
    const temp = new Set(this.products.map((el) => el.productCategory));
    this.category = [...temp];
    this.category.unshift("All");
  }


  categoryView(category: string) {
    if (category === "All") {
      this.products = this.ogProducts;
    } else {
      this.products = this.ogProducts.filter(
        (el) => el.productCategory === category
      );
    }
  }

  toTop() {
    window.scrollTo(0, 0);
  }

  search(query: string) {
    const temp = this.ogProducts.filter((el) => {
      if (
        el.productName.trim().toLowerCase().includes(query.trim().toLowerCase())
      ) {
        return el;
      } else if (
        el.productCategory
          .trim()
          .toLowerCase()
          .includes(query.trim().toLowerCase())
      ) {
        return el;
      }
    });
    this.products = temp;
  }
}
