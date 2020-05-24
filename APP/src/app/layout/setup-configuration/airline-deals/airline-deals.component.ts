import { Component, OnInit } from '@angular/core';
import { AirlineDeals } from 'src/app/shared/models/setup-config/airline-deals';
import { SetupConfigService } from 'src/app/shared/services/setup-config/setup-config.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { AirlineCommission } from 'src/app/shared/models/setup-config/airline-commission';
import { JsonPipe } from '@angular/common';
import { element } from 'protractor';

import { CommonService } from 'src/app/shared/services/common.service';
import { ReportService } from 'src/app/shared/services/report/report.service';
import { environment } from './../../../../environments/environment';



@Component({
  selector: 'app-airline-deals',
  templateUrl: './airline-deals.component.html',
  styleUrls: ['./airline-deals.component.scss']
})
export class AirlineDealsComponent implements OnInit {

  activeTab: boolean = true;
  tabName: string = "first-tab";
  url = environment.serverURL;

  constructor() { }

  ngOnInit() {}

  activateTab(name) {
    switch (name) {
      case 'first-tab':
        this.activeTab = true;
        this.tabName = name;
        break;
      case 'second-tab':
        this.activeTab = true;
        this.tabName = name;
        break;
        case 'third-tab':
          this.activeTab = true;
          this.tabName = name;
          break;
      default:
        this.activeTab = true;
        this.tabName = name;
        break;
    }
  }
}
