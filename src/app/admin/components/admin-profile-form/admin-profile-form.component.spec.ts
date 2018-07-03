import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfileFormComponent } from './admin-profile-form.component';

describe('AdminProfileFormComponent', () => {
  let component: AdminProfileFormComponent;
  let fixture: ComponentFixture<AdminProfileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProfileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
