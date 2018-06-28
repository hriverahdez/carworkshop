import { TestBed, inject } from '@angular/core/testing';

import { MaintenancesHelperService } from './maintenances-helper.service';

describe('MaintenancesHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaintenancesHelperService]
    });
  });

  it('should be created', inject([MaintenancesHelperService], (service: MaintenancesHelperService) => {
    expect(service).toBeTruthy();
  }));
});
