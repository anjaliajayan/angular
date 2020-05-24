import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceInvoiceComponent } from './insurance-invoice.component';

describe('InsuranceInvoiceComponent', () => {
  let component: InsuranceInvoiceComponent;
  let fixture: ComponentFixture<InsuranceInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
