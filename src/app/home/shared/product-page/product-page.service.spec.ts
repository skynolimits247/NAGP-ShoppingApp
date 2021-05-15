import { TestBed } from '@angular/core/testing';

import { ProductPageService } from './product-page.service';

describe('ProductPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductPageService = TestBed.get(ProductPageService);
    expect(service).toBeTruthy();
  });
});
