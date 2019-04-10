import { TestBed } from '@angular/core/testing';

import { CasodeusoService } from './casodeuso.service';

describe('CasodeusoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CasodeusoService = TestBed.get(CasodeusoService);
    expect(service).toBeTruthy();
  });
});
