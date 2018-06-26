import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInfoPaneComponent } from './car-info-pane.component';

describe('CarInfoPaneComponent', () => {
  let component: CarInfoPaneComponent;
  let fixture: ComponentFixture<CarInfoPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarInfoPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarInfoPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
