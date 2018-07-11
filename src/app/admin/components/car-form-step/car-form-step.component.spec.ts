import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFormStepComponent } from './car-form-step.component';

describe('CarFormStepComponent', () => {
  let component: CarFormStepComponent;
  let fixture: ComponentFixture<CarFormStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFormStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFormStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
