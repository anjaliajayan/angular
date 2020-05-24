import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetupConfigurationComponent } from './setup-configuration.component';


const routes: Routes = [
  {
    path: '',
    component: SetupConfigurationComponent,
    children: [
      { path: '', redirectTo: 'airline-deals', pathMatch: 'prefix' },
      { path: 'airline-deals', loadChildren: () => import('./airline-deals/airline-deals.module').then(m => m.AirlineDealsModule) },
      { path: 'content-management', loadChildren: () => import('./content-management/content-management.module').then(m => m.ContentManagementModule) },
      { path: 'currency-configuration', loadChildren: () => import('./currency-configuration/currency-configuration.module').then(m => m.CurrencyConfigurationModule) },
      { path: 'email-templates', loadChildren: () => import('./email-templates/email-templates.module').then(m => m.EmailTemplatesModule) },
      { path: 'markup-configuration', loadChildren: () => import('./markup-configuration/markup-configuration.module').then(m => m.MarkupConfigurationModule) },
      { path: 'promotion-content', loadChildren: () => import('./promotion-content/promotion-content.module').then(m => m.PromotionContentModule) },
      { path: 'supplier', loadChildren: () => import('./supplier/supplier.module').then(m => m.SupplierModule) },
      { path: 'edit-supplier/:id', loadChildren: () => import('./supplier-edit/supplier-edit.module').then(m => m.SupplierEditModule) },
      { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupConfigurationRoutingModule { }
