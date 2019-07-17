import { TestBed } from '@angular/core/testing';

import { TodoServicesService } from './todo-services.service';

describe('TodoServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoServicesService = TestBed.get(TodoServicesService);
    expect(service).toBeTruthy();
  });
});
