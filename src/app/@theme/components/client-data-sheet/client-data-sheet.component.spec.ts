import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDataSheetComponent } from './client-data-sheet.component';

describe('ClientDataSheetComponent', () => {
  let component: ClientDataSheetComponent;
  let fixture: ComponentFixture<ClientDataSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDataSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDataSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
