import { TestBed } from '@angular/core/testing';

import { OrganizationHService } from './organization-h.service';

describe('OrganizationHService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganizationHService = TestBed.get(OrganizationHService);
    expect(service).toBeTruthy();
  });
});
