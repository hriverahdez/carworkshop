import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsViewSelectorComponent } from './clients-view-selector.component';

describe('ClientsViewSelectorComponent', () => {
  let component: ClientsViewSelectorComponent;
  let fixture: ComponentFixture<ClientsViewSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsViewSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsViewSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
