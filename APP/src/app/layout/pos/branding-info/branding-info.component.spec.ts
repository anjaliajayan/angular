import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingInfoComponent } from './branding-info.component';

describe('BrandingInfoComponent', () => {
  let component: BrandingInfoComponent;
  let fixture: ComponentFixture<BrandingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
