import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsSearchResultsComponent } from './hotels-search-results.component';

describe('HotelsSearchResultsComponent', () => {
  let component: HotelsSearchResultsComponent;
  let fixture: ComponentFixture<HotelsSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelsSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
