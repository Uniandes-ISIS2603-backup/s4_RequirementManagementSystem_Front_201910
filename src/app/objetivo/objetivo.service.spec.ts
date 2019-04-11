import { TestBed } from '@angular/core/testing';

import { ObjetivoService } from './objetivo.service';

describe('ObjetivoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObjetivoService = TestBed.get(ObjetivoService);
    expect(service).toBeTruthy();
  });
});
