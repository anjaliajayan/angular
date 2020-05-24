import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetPackageComponent } from './preset-package.component';

describe('PresetPackageComponent', () => {
  let component: PresetPackageComponent;
  let fixture: ComponentFixture<PresetPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresetPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresetPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
