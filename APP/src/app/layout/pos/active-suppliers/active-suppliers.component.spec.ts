import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSuppliersComponent } from './active-suppliers.component';

describe('ActiveSuppliersComponent', () => {
  let component: ActiveSuppliersComponent;
  let fixture: ComponentFixture<ActiveSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
