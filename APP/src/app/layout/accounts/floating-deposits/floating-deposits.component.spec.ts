import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingDepositsComponent } from './floating-deposits.component';

describe('FloatingDepositsComponent', () => {
  let component: FloatingDepositsComponent;
  let fixture: ComponentFixture<FloatingDepositsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingDepositsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingDepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
