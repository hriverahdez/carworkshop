import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarNameComponent } from './car-name.component';

describe('CarNameComponent', () => {
  let component: CarNameComponent;
  let fixture: ComponentFixture<CarNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
