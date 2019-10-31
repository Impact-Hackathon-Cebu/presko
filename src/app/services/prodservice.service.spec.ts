import { TestBed } from '@angular/core/testing';

import { ProductService } from './prodservice.service';

describe('ProdserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });
});
