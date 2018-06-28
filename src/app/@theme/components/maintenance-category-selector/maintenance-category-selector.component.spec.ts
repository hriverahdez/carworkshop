import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceCategorySelectorComponent } from './maintenance-category-selector.component';

describe('MaintenanceCategorySelectorComponent', () => {
  let component: MaintenanceCategorySelectorComponent;
  let fixture: ComponentFixture<MaintenanceCategorySelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceCategorySelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceCategorySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
