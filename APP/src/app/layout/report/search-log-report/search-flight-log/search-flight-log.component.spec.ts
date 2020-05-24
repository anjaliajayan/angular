import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlightLogComponent } from './search-flight-log.component';

describe('SearchFlightLogComponent', () => {
  let component: SearchFlightLogComponent;
  let fixture: ComponentFixture<SearchFlightLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFlightLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFlightLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
