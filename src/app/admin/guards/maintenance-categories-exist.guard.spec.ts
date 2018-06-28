import { TestBed, async, inject } from '@angular/core/testing';

import { MaintenanceCategoriesExistGuard } from './maintenance-categories-exist.guard';

describe('MaintenanceCategoriesExistGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaintenanceCategoriesExistGuard]
    });
  });

  it('should ...', inject([MaintenanceCategoriesExistGuard], (guard: MaintenanceCategoriesExistGuard) => {
    expect(guard).toBeTruthy();
  }));
});
