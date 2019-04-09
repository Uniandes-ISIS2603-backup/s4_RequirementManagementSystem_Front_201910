import { TestBed } from '@angular/core/testing';

import { OrganizacionService } from './organizacion.service';

describe('OrganizacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganizacionService = TestBed.get(OrganizacionService);
    expect(service).toBeTruthy();
  });
});
