import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaresBaggageComponent } from './fares-baggage.component';

describe('FaresBaggageComponent', () => {
  let component: FaresBaggageComponent;
  let fixture: ComponentFixture<FaresBaggageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaresBaggageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaresBaggageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
