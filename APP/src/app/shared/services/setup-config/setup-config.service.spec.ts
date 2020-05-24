import { TestBed } from '@angular/core/testing';

import { SetupConfigService } from './setup-config.service';

describe('SetupConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetupConfigService = TestBed.get(SetupConfigService);
    expect(service).toBeTruthy();
  });
});
