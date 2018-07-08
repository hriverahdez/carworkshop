import { TestBed, async, inject } from '@angular/core/testing';

import { ClientLoadedGuard } from './client-loaded.guard';

describe('ClientLoadedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientLoadedGuard]
    });
  });

  it('should ...', inject([ClientLoadedGuard], (guard: ClientLoadedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
