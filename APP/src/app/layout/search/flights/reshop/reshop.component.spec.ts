import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReshopComponent } from './reshop.component';

describe('ReshopComponent', () => {
  let component: ReshopComponent;
  let fixture: ComponentFixture<ReshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
