import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceBookDetailsComponent } from './insurance-book-details.component';

describe('InsuranceBookDetailsComponent', () => {
  let component: InsuranceBookDetailsComponent;
  let fixture: ComponentFixture<InsuranceBookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceBookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
