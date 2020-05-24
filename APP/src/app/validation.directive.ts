// import { Directive, ElementRef, OnInit, Input } from '@angular/core';

// @Directive({
//   selector: '[appValidation]'
// })
// export class ValidationDirective implements OnInit {
//   @Input('appValidation') type;

//   constructor(private el: ElementRef) {
//   }

//   ngOnInit() {
//     if (this.type.label == 'error' &&
//       this.type.control.errors.required
//     ) {
//       this.el.nativeElement.textContent = `${this.type.placeholder} is required.`;
//       this.el.nativeElement.classList.add("validator-msg");
//     }
//   }

// }
