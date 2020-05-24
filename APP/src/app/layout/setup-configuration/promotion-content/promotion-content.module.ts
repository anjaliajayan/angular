import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionContentRoutingModule } from './promotion-content-routing.module';
import { PromotionContentComponent } from './promotion-content.component';


@NgModule({
  declarations: [PromotionContentComponent],
  imports: [
    CommonModule,
    PromotionContentRoutingModule
  ]
})
export class PromotionContentModule { }
