import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineDealsComponent } from './airline-deals.component';

describe('AirlineDealsComponent', () => {
  let component: AirlineDealsComponent;
  let fixture: ComponentFixture<AirlineDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlineDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
