import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderretrieveComponent } from './orderretrieve.component';

describe('OrderretrieveComponent', () => {
  let component: OrderretrieveComponent;
  let fixture: ComponentFixture<OrderretrieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderretrieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderretrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
