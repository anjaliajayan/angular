import { FloatingDepositsComponent } from './floating-deposits/floating-deposits.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { IurComponent } from './iur/iur.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AccountsComponent } from './accounts.component';


@NgModule({
  declarations: [AccountsComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
