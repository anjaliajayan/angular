import { FlightsComponent } from './flights.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReshopComponent } from './reshop/reshop.component';
import { ReshopResultsComponent } from './reshop/reshop-results/reshop-results.component';

const outletObj = [];
const routes: Routes = [
  {
    path: '',
    component: FlightsComponent
  },
  {
    path: 'reshop',
    children: [{
      path: '',
      component: ReshopComponent
    }, {
      path: 'reshop-results',
      component: ReshopResultsComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsRoutingModule {
  populateChildren() {
    for (let i = 1; i <= 6; i++) {
      outletObj.push()
    }
  }

  constructor() {
    this.populateChildren();
  }
}
