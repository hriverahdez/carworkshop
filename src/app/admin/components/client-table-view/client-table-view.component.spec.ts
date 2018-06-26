import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTableViewComponent } from './client-table-view.component';

describe('ClientTableViewComponent', () => {
  let component: ClientTableViewComponent;
  let fixture: ComponentFixture<ClientTableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientTableViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
