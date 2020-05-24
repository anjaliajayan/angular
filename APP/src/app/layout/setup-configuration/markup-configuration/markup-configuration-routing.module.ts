import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkupConfigurationComponent } from './markup-configuration.component';


const routes: Routes = [
  {path: '', component: MarkupConfigurationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarkupConfigurationRoutingModule { }
