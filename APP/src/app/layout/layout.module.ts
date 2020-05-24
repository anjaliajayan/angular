import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { SidebarMiniComponent } from './components/sidebar-mini/sidebar-mini.component';
import { ApplicationAccess } from '../access.module';
import { UpgradeService } from '../shared/services/upgrade.service';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryListModule } from './country-list/country-list.module';
import { CommonService } from '../shared/services/common.service';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [LayoutComponent, SidebarComponent, SidebarMiniComponent, HeaderComponent, LoaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CountryListModule,
    ApplicationAccess
  ],
  providers: [
    MatDatepickerModule,
    UpgradeService,
    CommonService
  ]
})
export class LayoutModule { }
