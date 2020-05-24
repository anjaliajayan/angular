import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBookingDetailsComponent } from './car-booking-details.component';

describe('CarBookingDetailsComponent', () => {
  let component: CarBookingDetailsComponent;
  let fixture: ComponentFixture<CarBookingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarBookingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
