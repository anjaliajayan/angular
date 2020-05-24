import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionContentComponent } from './promotion-content.component';

describe('PromotionContentComponent', () => {
  let component: PromotionContentComponent;
  let fixture: ComponentFixture<PromotionContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
