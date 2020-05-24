import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { EmailTemplatesRoutingModule } from './email-templates-routing.module';
import { EmailTemplatesComponent } from './email-templates.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';
import { ModalModule } from '../../_modal';
import { ApplicationAccess } from 'src/app/access.module';


@NgModule({
  declarations: [EmailTemplatesComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    EmailTemplatesRoutingModule,
    ReactiveFormsModule,
    CKEditorModule,
    ModalModule,
    ApplicationAccess
  ]
})
export class EmailTemplatesModule { }
