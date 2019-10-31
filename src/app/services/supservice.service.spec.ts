import { TestBed } from '@angular/core/testing';

import { SupplierService } from './supservice.service';

describe('SupserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupplierService = TestBed.get(SupplierService);
    expect(service).toBeTruthy();
  });
});
