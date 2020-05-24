import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
      { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) },
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule) },
      { path: 'bookings', loadChildren: () => import('./bookings/bookings.module').then(m => m.BookingsModule) },
      { path: 'corporates', loadChildren: () => import('./corporates/corporates.module').then(m => m.CorporatesModule) },
      { path: 'create-client', loadChildren: () => import('./create-client/create-client.module').then(m => m.CreateClientModule) },
      { path: 'help', loadChildren: () => import('./help/help.module').then(m => m.HelpModule) },
      { path: 'point-sales-management', loadChildren: () => import('./point-sales-management/point-sales-management.module').then(m => m.PointSalesManagementModule) },
      { path: 'preset-package', loadChildren: () => import('./preset-package/preset-package.module').then(m => m.PresetPackageModule) },
      { path: 'report', loadChildren: () => import('./report/report.module').then(m => m.ReportModule) },
      { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
      { path: 'setup-configuration', loadChildren: () => import('./setup-configuration/setup-configuration.module').then(m => m.SetupConfigurationModule) },
      { path: 'user-role-management', loadChildren: () => import('./user-role-management/user-role-management.module').then(m => m.UserRoleManagementModule) },
      { path: 'profile-management', loadChildren: () => import('./profile-management/profile-management.module').then(m => m.ProfileManagementModule) },
      // { path: 'routing',loadChildren:() => import('./report/report.module').then(m => m.ReportModule)}

      { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
      { path: 'pos', loadChildren: () => import('./pos/pos.module').then(m => m.PosModule) },
      { path: 'roles', loadChildren: () => import('./setup-configuration/roles/roles.module').then(m => m.RolesModule) },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
