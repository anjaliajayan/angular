import { ActivitiesComponent } from './activities.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsComponent } from '../activities/details/details.component';
import { BlockComponent } from '../activities/block/block.component';

const routes: Routes = [
  {path: '', component: ActivitiesComponent},
  {
    path: 'details',
    children:[
    { path: '', component:DetailsComponent }
  ]
  },
  {
    path: 'block',
    children:[
    { path: '', component:BlockComponent }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
