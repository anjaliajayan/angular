import { TestBed, async } from '@angular/core/testing';
import { EncDecAESComponent } from './enc-dec-aes.component';

describe('EncDecAESComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EncDecAESComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EncDecAESComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Encryption Decryption'`, () => {
    const fixture = TestBed.createComponent(EncDecAESComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Encryption Decryption');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(EncDecAESComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Encryption Decryption!');
  });
});
