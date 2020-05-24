import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPromotionRoutingModule } from './list-promotion-routing.module';
import { ListPromotionComponent } from './list-promotion.component';


@NgModule({
  declarations: [ListPromotionComponent],
  imports: [
    CommonModule,
    ListPromotionRoutingModule
  ]
})
export class ListPromotionModule { }
