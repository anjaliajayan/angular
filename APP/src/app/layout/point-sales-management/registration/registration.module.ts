import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { MomentModule } from 'ngx-moment';
import { ModalModule } from '../../_modal';
import { ApplicationAccess } from 'src/app/access.module';


@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    RegistrationRoutingModule,
    CommonModule,
    NgxDatatableModule,
    ModalModule,
    ApplicationAccess
  ]
})
export class RegistrationModule { }
