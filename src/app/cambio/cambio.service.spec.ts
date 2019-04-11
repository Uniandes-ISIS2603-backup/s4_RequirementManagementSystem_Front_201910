import { TestBed } from '@angular/core/testing';

import { CambioService } from './cambio.service';

describe('CambioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CambioService = TestBed.get(CambioService);
    expect(service).toBeTruthy();
  });
});
