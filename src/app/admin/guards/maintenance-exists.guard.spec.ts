import { TestBed, async, inject } from '@angular/core/testing';

import { MaintenanceExistsGuard } from './maintenance-exists.guard';

describe('MaintenanceExistsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaintenanceExistsGuard]
    });
  });

  it('should ...', inject([MaintenanceExistsGuard], (guard: MaintenanceExistsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
