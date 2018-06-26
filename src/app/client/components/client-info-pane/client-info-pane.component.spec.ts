import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInfoPaneComponent } from './client-info-pane.component';

describe('ClientInfoPaneComponent', () => {
  let component: ClientInfoPaneComponent;
  let fixture: ComponentFixture<ClientInfoPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientInfoPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInfoPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
