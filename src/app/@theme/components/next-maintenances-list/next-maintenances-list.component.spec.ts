import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextMaintenancesListComponent } from './next-maintenances-list.component';

describe('NextMaintenancesListComponent', () => {
  let component: NextMaintenancesListComponent;
  let fixture: ComponentFixture<NextMaintenancesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextMaintenancesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextMaintenancesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
