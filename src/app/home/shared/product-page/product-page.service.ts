import { Injectable } from '@angular/core';
import { OrderItem } from '../../../shared/models/index';
import { CartPageService } from '../../../cart/shared/cart-page/cart-page.service';
@Injectable({
  providedIn: 'root',
})
export class ProductPageService {
  products: OrderItem[] = [
    {
      productCode: '000000000000000186',
      productName: 'Oil Shampoo',
      requiredQuantity: 0,
      productCategory: 'Hair Care',
      unitPrice: 29.99,
      productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      maxQuantity: 110,
      imageUrl:
        // tslint:disable-next-line:max-line-length
        'data:image/jpeg;base64,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',
    },
    {
      productCode: '000003614271807687',
      requiredQuantity: 0,
      productName: 'Rénergie Lift Multi-Action Ultra Moisturizer',
      productCategory: 'Moisturizer',
      unitPrice: 87.2,
      productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      maxQuantity: 110,
      imageUrl:
        // tslint:disable-next-line:max-line-length
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MpWUw46T8gZLtsD2uRpBZ1qmfOg34ybaWU9Prmv5XZPbo3GH&s',
    },
    {
      productCode: '000003614272653146',
      requiredQuantity: 0,
      productName: `L'Absolu Rouge Ruby Cream Lipstick`,
      productCategory: 'Makeup',
      unitPrice: 25.6,
      maxQuantity: 600,
      productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      imageUrl:
        // tslint:disable-next-line:max-line-length
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MpWUw46T8gZLtsD2uRpBZ1qmfOg34ybaWU9Prmv5XZPbo3GH&s',
    },
    {
      productCode: '000003614272725188',
      requiredQuantity: 0,
      productName: 'Limited Edition, La Vie Est Belle x Atelier Paulin',
      productCategory: 'Fragrance',
      unitPrice: 76.8,
      maxQuantity: 600,
      productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      imageUrl:
        // tslint:disable-next-line:max-line-length
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MpWUw46T8gZLtsD2uRpBZ1qmfOg34ybaWU9Prmv5XZPbo3GH&s',
    },
    {
      productCode: '000003605533444917',
      requiredQuantity: 0,
      productName: 'La Vie Est Belle',
      productCategory: 'Fragrance',
      unitPrice: 21.6,
      maxQuantity: 600,
      productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      imageUrl:
        // tslint:disable-next-line:max-line-length
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MpWUw46T8gZLtsD2uRpBZ1qmfOg34ybaWU9Prmv5XZPbo3GH&s',
    },
    {
      productCode: '000003614272227026',
      requiredQuantity: 0,
      productName: 'Exfoliating Rose Sugar Scrub',
      productCategory: 'Exfoliators',
      unitPrice: 20.0,
      maxQuantity: 600,
      productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      imageUrl:
        // tslint:disable-next-line:max-line-length
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MpWUw46T8gZLtsD2uRpBZ1qmfOg34ybaWU9Prmv5XZPbo3GH&s',
    },
    {
      productCode: '000003605970271398',
      requiredQuantity: 0,
      productName: 'Crème Radiance',
      productCategory: 'Cleanser',
      unitPrice: 29.6,
      productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      maxQuantity: 110,
      imageUrl:
        // tslint:disable-next-line:max-line-length
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MpWUw46T8gZLtsD2uRpBZ1qmfOg34ybaWU9Prmv5XZPbo3GH&s',
    },
    {
      productCode: '000000000000000185',
      requiredQuantity: 0,
      productCategory: 'Hair Care',
      productName: 'HairSpa Shampoo',
      unitPrice: 49.99,
      productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      maxQuantity: 110,
      imageUrl:
        // tslint:disable-next-line:max-line-length
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MpWUw46T8gZLtsD2uRpBZ1qmfOg34ybaWU9Prmv5XZPbo3GH&s',
    },
    {
      productCode: '000000000000000184',
      requiredQuantity: 0,
      productCategory: 'Face Care',
      productName: 'Revitalift Cream',
      unitPrice: 79.99,
      productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      maxQuantity: 110,
      imageUrl:
        // tslint:disable-next-line:max-line-length
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekmYVi-JcMDGv71ICucL79u94iN8hnW5PLxX49b9U7Fy6PR1-&s',
    },
    {
      productCode: '000000000000000183',
      requiredQuantity: 0,
      productCategory: 'Cleanser',
      productName: 'Skincream',
      unitPrice: 59.99,
      productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      maxQuantity: 110,
      imageUrl:
        // tslint:disable-next-line:max-line-length
        'data:image/jpeg;base64,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',
    },
    {
      productCode: '000000000000000182',
      requiredQuantity: 0,
      productCategory: 'Makeup',
      productName: 'Rich Lip Gloss',
      unitPrice: 39.99,
      productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      maxQuantity: 110,
      imageUrl:
        // tslint:disable-next-line:max-line-length
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNvaNOJ4DIqawbmXZGBrMFRFOgjrzFDZwxrYvmEspi5E9HfeN&s',
    },
    {
      productCode: '000000000000000181',
      requiredQuantity: 0,
      productCategory: 'Makeup',
      productName: 'Lip Care Balm',
      unitPrice: 19.99,
      productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      maxQuantity: 110,
      imageUrl:
        // tslint:disable-next-line:max-line-length
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw_wTbAVc6BcaiK0NBaHkSTp0bmo2M3kR7uqfQbgYLN5PtrvU8ow&s',
    },
    {
      productCode: '000003614272453135',
      requiredQuantity: 0,
      productName: 'Hypnôse 5-Color Eyeshadow Palette',
      productCategory: 'Makeup',
      unitPrice: 40.0,
      maxQuantity: 300,
      productDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      imageUrl:
        // tslint:disable-next-line:max-line-length
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MpWUw46T8gZLtsD2uRpBZ1qmfOg34ybaWU9Prmv5XZPbo3GH&s',
    },
  ];
  constructor(private cartService: CartPageService) {}

  getProducts() {
    return this.products;
  }

  getCart() {
    this.cartService.getCart();
  }
}
