import { TestBed } from '@angular/core/testing';

import { BackendServicesService } from './backend-services.service';

describe('BackendServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackendServicesService = TestBed.get(BackendServicesService);
    expect(service).toBeTruthy();
  });
});
