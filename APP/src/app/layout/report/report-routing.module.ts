import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report.component';


const routes: Routes = [
  {
    path: '', 
    component: ReportComponent,
    children: [
      { path: '', redirectTo: 'booking-report', pathMatch: 'prefix' },
      { path: 'booking-report', loadChildren: () => import('./booking-report/booking-report.module').then(m => m.BookingReportModule) },
      { path: 'segment-report', loadChildren: () => import('./segment-report/segment-report.module').then(m => m.SegmentReportModule) },
      { path: 'mis-report', loadChildren: () => import('./mis-report/mis-report.module').then(m => m.MISReportModule) },
      { path: 'audit-report', loadChildren: () => import('./audit-report/audit-report.module').then(m => m.AuditReportModule) },
      { path: 'dynamic-report', loadChildren: () => import('./dynamic-report/dynamic-report.module').then(m => m.DynamicReportModule) },
      { path: 'ticket-report', loadChildren: () => import('./ticket-report/ticket-report.module').then(m => m.TicketReportModule) },
      { path: 'search-log-report', loadChildren: () => import('./search-log-report/search-log-report.module').then(m => m.SearchLogReportModule) },
      // { path: 'view_hotel_logs', loadChildren: () => import('./search-log-report/search-log-report.module').then(m => m.SearchLogReportModule) }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
