import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightInvoiceComponent } from './flight-invoice.component';

describe('FlightInvoiceComponent', () => {
  let component: FlightInvoiceComponent;
  let fixture: ComponentFixture<FlightInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
