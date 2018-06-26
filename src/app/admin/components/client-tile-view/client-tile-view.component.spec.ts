import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTileViewComponent } from './client-tile-view.component';

describe('ClientTileViewComponent', () => {
  let component: ClientTileViewComponent;
  let fixture: ComponentFixture<ClientTileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientTileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
