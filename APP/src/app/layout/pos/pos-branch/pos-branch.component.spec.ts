import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosBranchComponent } from './pos-branch.component';

describe('PosBranchComponent', () => {
  let component: PosBranchComponent;
  let fixture: ComponentFixture<PosBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
