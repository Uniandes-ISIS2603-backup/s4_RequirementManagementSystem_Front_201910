import { TestBed } from '@angular/core/testing';

import { CaminoService } from './camino.service';

describe('CaminoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaminoService = TestBed.get(CaminoService);
    expect(service).toBeTruthy();
  });
});
