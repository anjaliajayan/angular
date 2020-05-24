import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourcodeComponent } from './tourcode.component';

describe('TourcodeComponent', () => {
  let component: TourcodeComponent;
  let fixture: ComponentFixture<TourcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
