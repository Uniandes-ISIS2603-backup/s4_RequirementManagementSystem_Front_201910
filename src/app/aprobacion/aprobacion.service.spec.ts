import { TestBed } from '@angular/core/testing';

import { AprobacionService } from './aprobacion.service';

describe('AprobacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AprobacionService = TestBed.get(AprobacionService);
    expect(service).toBeTruthy();
  });
});
