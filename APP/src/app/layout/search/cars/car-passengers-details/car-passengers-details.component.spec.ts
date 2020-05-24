import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPassengersDetailsComponent } from './car-passengers-details.component';

describe('CarPassengersDetailsComponent', () => {
  let component: CarPassengersDetailsComponent;
  let fixture: ComponentFixture<CarPassengersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarPassengersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarPassengersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
