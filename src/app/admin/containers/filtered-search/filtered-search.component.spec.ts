import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredSearchComponent } from './filtered-search.component';

describe('FilteredSearchComponent', () => {
  let component: FilteredSearchComponent;
  let fixture: ComponentFixture<FilteredSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
