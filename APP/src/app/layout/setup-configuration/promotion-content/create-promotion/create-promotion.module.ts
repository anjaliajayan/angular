import { CreatePromotionComponent } from './create-promotion.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePromotionRoutingModule } from './create-promotion-routing.module';


@NgModule({
  declarations: [CreatePromotionComponent],
  imports: [
    CommonModule,
    CreatePromotionRoutingModule
  ]
})
export class CreatePromotionModule { }
