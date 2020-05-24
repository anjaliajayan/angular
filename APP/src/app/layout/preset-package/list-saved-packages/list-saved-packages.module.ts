import { ListSavedPackagesComponent } from './list-saved-packages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListSavedPackagesRoutingModule } from './list-saved-packages-routing.module';


@NgModule({
  declarations: [ListSavedPackagesComponent],
  imports: [
    CommonModule,
    ListSavedPackagesRoutingModule
  ]
})
export class ListSavedPackagesModule { }
