import { PresetPackageComponent } from './preset-package.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PresetPackageComponent,
    children: [
      { path: '', redirectTo: 'create-package', pathMatch: 'prefix' },
      { path: 'create-package', loadChildren: () => import('./create-package/create-package.module').then(m => m.CreatePackageModule) },
      { path: 'list-saved-packages', loadChildren: () => import('./list-saved-packages/list-saved-packages.module').then(m => m.ListSavedPackagesModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresetPackageRoutingModule { }
