import { CreatePromotionComponent } from './create-promotion/create-promotion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromotionContentComponent } from './promotion-content.component';


const routes: Routes = [
  {path: '', component: PromotionContentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionContentRoutingModule { }
