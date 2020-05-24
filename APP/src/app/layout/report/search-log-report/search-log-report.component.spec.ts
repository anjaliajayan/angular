import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLogReportComponent } from './search-log-report.component';

describe('SearchLogReportComponent', () => {
  let component: SearchLogReportComponent;
  let fixture: ComponentFixture<SearchLogReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLogReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLogReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
