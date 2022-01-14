import { TestBed } from '@angular/core/testing';

import { RubricaManagerService } from './rubrica-manager.service';

describe('RubricaManagerService', () => {
  let service: RubricaManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RubricaManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
