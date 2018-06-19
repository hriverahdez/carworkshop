import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicHomeComponent } from './mechanic-home.component';

describe('MechanicHomeComponent', () => {
  let component: MechanicHomeComponent;
  let fixture: ComponentFixture<MechanicHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
