import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncDecAESComponent } from './enc-dec-aes.component';

const routes: Routes = [
  {
    path: '', 
    component: EncDecAESComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
