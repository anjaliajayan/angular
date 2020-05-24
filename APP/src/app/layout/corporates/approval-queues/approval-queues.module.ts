import { ApprovalQueuesComponent } from './approval-queues.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApprovalQueuesRoutingModule } from './approval-queues-routing.module';


@NgModule({
  declarations: [ApprovalQueuesComponent],
  imports: [
    CommonModule,
    ApprovalQueuesRoutingModule
  ]
})
export class ApprovalQueuesModule { }
