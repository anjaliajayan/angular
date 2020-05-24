import { AccountsComponent } from './accounts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AccountsComponent,
    children: [
      { path: '', redirectTo: 'floating-deposits', pathMatch: 'prefix' },
      { path: 'floating-deposits', loadChildren: () => import('./floating-deposits/floating-deposits.module').then(m => m.FloatingDepositsModule) },
      { path: 'iur', loadChildren: () => import('./iur/iur.module').then(m => m.IurModule) },
      { path: 'transactions', loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
