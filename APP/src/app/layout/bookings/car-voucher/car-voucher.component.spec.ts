import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarVoucherComponent } from './car-voucher.component';

describe('CarVoucherComponent', () => {
  let component: CarVoucherComponent;
  let fixture: ComponentFixture<CarVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
