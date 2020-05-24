import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosReadComponent } from './pos-read.component';

describe('PosReadComponent', () => {
  let component: PosReadComponent;
  let fixture: ComponentFixture<PosReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
