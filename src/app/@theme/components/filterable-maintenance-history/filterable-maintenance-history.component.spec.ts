import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterableMaintenanceHistoryComponent } from './filterable-maintenance-history.component';

describe('FilterableMaintenanceHistoryComponent', () => {
  let component: FilterableMaintenanceHistoryComponent;
  let fixture: ComponentFixture<FilterableMaintenanceHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterableMaintenanceHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterableMaintenanceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
