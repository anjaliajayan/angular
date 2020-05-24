import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInsuranceComponent } from './search-insurance.component';

describe('SearchInsuranceComponent', () => {
  let component: SearchInsuranceComponent;
  let fixture: ComponentFixture<SearchInsuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
