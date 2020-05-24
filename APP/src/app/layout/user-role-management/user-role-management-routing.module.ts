import { UserRoleManagementComponent } from './user-role-management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared';


const routes: Routes = [
  {
    path: '',
    component: UserRoleManagementComponent,
    children: [
      { path: '', redirectTo: 'create-user', pathMatch: 'prefix' },
      { path: 'create-user', loadChildren: () => import('./create-user/create-user.module').then(m => m.CreateUserModule) , /*canActivate: [AuthGuard]*/  },
      { path: 'list-user', loadChildren: () => import('./list-user/list-user.module').then(m => m.ListUserModule) },
      { path: 'edit-user/:id', loadChildren: () => import('./edit-user/edit-user.module').then(m => m.EditUserModule) },
      { path: 'view-user/:id', loadChildren: () => import('./view-user/view-user.module').then(m => m.ViewUserModule) },
      { path: 'update-profile', loadChildren: () => import('./update-profile/update-profile.module').then(m => m.UpdateProfileModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoleManagementRoutingModule { }
