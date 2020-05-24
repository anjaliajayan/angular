import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolesComponent } from './roles.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';

const routes: Routes = [
  { path: '', component: RolesComponent },
  { path: 'list', redirectTo: '', pathMatch: 'prefix' },
  // { path: 'list', component: RolesComponent },
  { path: 'create', component: CreateRoleComponent },
  { path: 'edit/:id', component: EditRoleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RolesRoutingModule { }
