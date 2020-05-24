import { CreatePackageComponent } from './create-package.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CKEditorModule} from 'ckeditor4-angular'

import { CreatePackageRoutingModule } from './create-package-routing.module';


@NgModule({
  declarations: [CreatePackageComponent],
  imports: [
    CommonModule,
    CKEditorModule,
    CreatePackageRoutingModule
  ]
})
export class CreatePackageModule { }
