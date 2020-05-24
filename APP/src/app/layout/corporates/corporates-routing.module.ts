import { CorporatesComponent } from './corporates.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: CorporatesComponent,
    children: [
      { path: '', redirectTo: 'approval-queues', pathMatch: 'prefix' },
      { path: 'approval-queues', loadChildren: () => import('./approval-queues/approval-queues.module').then(m => m.ApprovalQueuesModule) },
      { path: 'corporate-policy', loadChildren: () => import('./corporate-policy/corporate-policy.module').then(m => m.CorporatePolicyModule) },
      { path: 'corporate-profile', loadChildren: () => import('./corporate-profile/corporate-profile.module').then(m => m.CorporateProfileModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporatesRoutingModule { }
