import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosComponent } from './pos.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { AirlineRbdComponent } from './airline-rbd/airline-rbd.component';
import { PosBasicEditComponent } from './pos-basic-edit/pos-basic-edit.component';
// import { PosOfficeDetailsComponent } from './pos-office-details/pos-office-details.component';
import { BrandingInfoComponent } from './branding-info/branding-info.component';
import { MonthlyTargetComponent } from './monthly-target/monthly-target.component';
import { ActiveSuppliersComponent } from './active-suppliers/active-suppliers.component';
import { PosReadComponent } from './pos-read/pos-read.component';
import { PosOfficeDetailsComponent } from './pos-office-details/pos-office-details.component';
import { PosBranchComponent } from './pos-branch/pos-branch.component';

const routes: Routes = [
    { path: '', redirectTo: 'basic-info', pathMatch: 'prefix' },
    { path: 'basic-info',component:BasicInfoComponent },
    { path: 'branch-add/:id',component:BasicInfoComponent },
    { path: 'airline-rbd/:id',component:AirlineRbdComponent },
    { path: 'basic-edit/:id',component:PosBasicEditComponent },
    { path: 'office-address/:id',component:PosOfficeDetailsComponent },
    { path: 'branding-info/:id',component:BrandingInfoComponent }, 
    { path: 'monthly-target/:id',component:MonthlyTargetComponent }, 
    { path: 'active-suppliers/:id',component:ActiveSuppliersComponent },
    { path: 'branch-info/:id',component:PosBranchComponent },
    { path: 'pos-read',component:PosReadComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddPosRoutingModule { }