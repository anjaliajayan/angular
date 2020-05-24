import { NgModule, } from '@angular/core';
import { CanAccessDirective } from './shared/utils/access.helper';
@NgModule({
  imports: [
    // dep modules
  ],
  declarations: [ 
    CanAccessDirective
  ],
  exports: [
    CanAccessDirective
  ]
})
export class ApplicationAccess {}