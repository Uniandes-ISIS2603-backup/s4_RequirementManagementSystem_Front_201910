import { TestBed } from '@angular/core/testing';

import { CondicionService } from './condicion.service';

describe('CondicionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CondicionService = TestBed.get(CondicionService);
    expect(service).toBeTruthy();
  });
});
