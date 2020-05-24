import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceVoucherComponent } from './insurance-voucher.component';

describe('InsuranceVoucherComponent', () => {
  let component: InsuranceVoucherComponent;
  let fixture: ComponentFixture<InsuranceVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
