import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormStepComponent } from './client-form-step.component';

describe('ClientFormStepComponent', () => {
  let component: ClientFormStepComponent;
  let fixture: ComponentFixture<ClientFormStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFormStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFormStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
