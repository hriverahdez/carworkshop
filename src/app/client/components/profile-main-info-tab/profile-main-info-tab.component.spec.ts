import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMainInfoTabComponent } from './profile-main-info-tab.component';

describe('ProfileMainInfoTabComponent', () => {
  let component: ProfileMainInfoTabComponent;
  let fixture: ComponentFixture<ProfileMainInfoTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMainInfoTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMainInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
