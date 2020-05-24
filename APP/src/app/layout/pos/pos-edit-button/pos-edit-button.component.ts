import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pos-edit-button',
  templateUrl: './pos-edit-button.component.html',
  styleUrls: ['./pos-edit-button.component.scss']
})
export class PosEditButtonComponent implements OnInit {

  organisationId: any;
  activeTab: boolean = false;
  tabName: any;

  constructor(
    private router: Router,
    private activeRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.organisationId = this.activeRoute.snapshot.params.id;
  }

  loadBranchInfo(){
    this.router.navigate(['/pos/branch-info/', this.organisationId]);
  }
  loadOfficeAddressInfo() {
    this.router.navigate(['/pos/office-address/', this.organisationId]);
  }
  loadBrandingInfo() {
    this.router.navigate(['/pos/branding-info/', this.organisationId]);
  }
  loadMonthlyTarget() {
    this.router.navigate(['/pos/monthly-target/', this.organisationId]);
  }
  loadSuppliers() {
    this.router.navigate(['/pos/active-suppliers/', this.organisationId]);
  }
  loadAirlineRBD() {
    this.router.navigate(['/pos/airline-rbd/', this.organisationId]);
  }

  activateTab(name) {
    switch (name) {
      case 'branch-tab':
        this.activeTab = true;
        this.tabName = name;
        break;
      case 'office-tab':
        this.activeTab = true;
        this.tabName = name;
        break;
      case 'branding-tab':
        this.activeTab = true;
        this.tabName = name;
        break;
      case 'monthly-tab':
        this.activeTab = true;
        this.tabName = name;
        break;
      case 'suppliers-tab':
        this.activeTab = true;
        this.tabName = name;
        break;
      case 'airline-tab':
        this.activeTab = true;
        this.tabName = name;
        break;
      default:
        this.activeTab = false;
        this.tabName = '';
        break;
    }
  }

}
