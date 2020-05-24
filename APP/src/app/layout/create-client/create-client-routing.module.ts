import { CreateClientComponent } from './create-client.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: CreateClientComponent,
    children: [
      { path: '', redirectTo: 'create-new-client', pathMatch: 'prefix' },
      { path: 'create-new-client', loadChildren: () => import('./create-new-client/create-new-client.module').then(m => m.CreateNewClientModule) },
      { path: 'list-client', loadChildren: () => import('./list-client/list-client.module').then(m => m.ListClientModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateClientRoutingModule { }
