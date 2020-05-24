import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';
import { rendererTypeName } from '@angular/compiler';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
@Input('appHighlight') highlightColor: string;
  constructor(private el: ElementRef,private renderer: Renderer2) { }
  @HostListener('click') onMouseClick() {
    this.highlight(this.highlightColor || 'red');
  }
  private highlight(color: string) {

    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color );
    ;
  }
}
