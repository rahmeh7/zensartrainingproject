import { TestBed } from '@angular/core/testing';

import { RegistrationService } from './registration.service';

describe('UserRegistationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrationService = TestBed.get(RegistrationService);
    expect(service).toBeTruthy();
  });
});
