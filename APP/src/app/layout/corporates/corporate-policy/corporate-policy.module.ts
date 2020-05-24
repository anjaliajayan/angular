import { CorporatePolicyComponent } from './corporate-policy.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporatePolicyRoutingModule } from './corporate-policy-routing.module';


@NgModule({
  declarations: [CorporatePolicyComponent],
  imports: [
    CommonModule,
    CorporatePolicyRoutingModule
  ]
})
export class CorporatePolicyModule { }
