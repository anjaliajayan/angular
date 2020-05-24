import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSearchResultsComponent } from './dynamic-search-results.component';

describe('DynamicSearchResultsComponent', () => {
  let component: DynamicSearchResultsComponent;
  let fixture: ComponentFixture<DynamicSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
