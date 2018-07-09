import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithLoaderComponent } from './button-with-loader.component';

describe('ButtonWithLoaderComponent', () => {
  let component: ButtonWithLoaderComponent;
  let fixture: ComponentFixture<ButtonWithLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonWithLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWithLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
