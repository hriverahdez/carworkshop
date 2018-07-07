import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextMaintenancesComponent } from './next-maintenances.component';

describe('NextMaintenancesComponent', () => {
  let component: NextMaintenancesComponent;
  let fixture: ComponentFixture<NextMaintenancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextMaintenancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextMaintenancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
