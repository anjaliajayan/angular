import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatePolicyComponent } from './corporate-policy.component';

describe('CorporatePolicyComponent', () => {
  let component: CorporatePolicyComponent;
  let fixture: ComponentFixture<CorporatePolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporatePolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
