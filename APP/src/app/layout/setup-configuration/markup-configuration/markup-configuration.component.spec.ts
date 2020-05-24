import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkupConfigurationComponent } from './markup-configuration.component';

describe('MarkupConfigurationComponent', () => {
  let component: MarkupConfigurationComponent;
  let fixture: ComponentFixture<MarkupConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkupConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkupConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
