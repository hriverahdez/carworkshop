import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAdditionalInfoTabComponent } from './profile-additional-info-tab.component';

describe('ProfileAdditionalInfoTabComponent', () => {
  let component: ProfileAdditionalInfoTabComponent;
  let fixture: ComponentFixture<ProfileAdditionalInfoTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAdditionalInfoTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAdditionalInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
