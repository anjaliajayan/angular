import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityBookingDetailsComponent } from './activity-booking-details.component';

describe('ActivityBookingDetailsComponent', () => {
  let component: ActivityBookingDetailsComponent;
  let fixture: ComponentFixture<ActivityBookingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityBookingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
