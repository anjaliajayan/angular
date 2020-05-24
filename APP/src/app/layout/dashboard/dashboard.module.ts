import { DashboardService } from "./../../shared/services/dashboard.service";
import { DashboardComponent } from "./dashboard.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { GraphsComponent } from "./components/graphs/graphs.component";

import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTabsModule } from "@angular/material/tabs";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [GraphsComponent, DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DashboardService]
})
export class DashboardModule {}
