import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineRbdComponent } from './airline-rbd.component';

describe('AirlineRbdComponent', () => {
  let component: AirlineRbdComponent;
  let fixture: ComponentFixture<AirlineRbdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlineRbdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineRbdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
