import { TestBed } from '@angular/core/testing';

import { MedicalManagementService } from './medical-management.service';

describe('MedicalManagementService', () => {
  let service: MedicalManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
