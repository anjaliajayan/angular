import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteleBookingDetailsComponent } from './hotele-booking-details.component';

describe('HoteleBookingDetailsComponent', () => {
  let component: HoteleBookingDetailsComponent;
  let fixture: ComponentFixture<HoteleBookingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoteleBookingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoteleBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
