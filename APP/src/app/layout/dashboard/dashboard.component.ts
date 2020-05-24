import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { organizationH } from 'src/app/shared/models/organization/organizaiton';
import { OrganizationHService } from 'src/app/shared/services/organization/organization-h.service';
import { UserService } from 'src/app/shared/services/user.services';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
import Swal from 'sweetalert2';

import { BookingsInfo, PerformanceInfo, MarginInfo, PresetInfo } from './../../shared/models/index';
import { ToastrService } from 'ngx-toastr';


declare const moment: any;
declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  isSubmitted = true;
  dForm: FormGroup;
  bookingsLoader: boolean = false;
  organisationLoader: boolean = false;

  organizations: organizationH[] = [];
  users: any[] = [];
  pos: Array<any> = [
    { name: 'Agent', value: 'Agent' },
    { name: 'Corporate', value: 'Corporate' },
    { name: 'Client', value: 'Client' },
    { name: 'B2C', value: 'B2C' },
    { name: 'API', value: 'API' },
    { name: 'Mobile', value: 'Mobile' }
  ];
  products: Array<any> = [
    { name: 'Flights', value: 'has_flight' },
    { name: 'Hotels', value: 'has_hotel' },
    { name: 'Insurance', value: 'has_insurance' },
    { name: 'Cars', value: 'has_car' },
    { name: 'Transfers', value: 'has_transfers' },
    { name: 'Activities', value: 'has_activities' },
    { name: 'Insurances', value: 'has_insurance' },
    { name: 'Cruises', value: 'has_cruises' },
    { name: 'Holidays', value: 'has_holiday' }
  ]
  filteredOrganizations: organizationH[] = [];

  // starts variables 
  performance: PerformanceInfo = {
    markup_price: [],
    supplier_price: [],
    tags: [],
    total_achieved: []
  }
  margin: MarginInfo = {
    margin: [],
    tags: []
  }
  bookings: BookingsInfo = { "total": 0, "flights": 0, "hotels": 0, "insurance": 0, "activities": 0, "carHire": 0, "transfers": 0, "holidays": 0, "cruise": 0 }

  presetInfo: PresetInfo = { "subagents": 0, "websites": 0, "corporates": 0, "total": 0, "active": 0, "inactive": 0 }

  constructor(
    private fb: FormBuilder,
    private orgService: OrganizationHService,
    private userService: UserService,
    private dashboardService: DashboardService,
    private toastr: ToastrService
  ) {
    this.dForm = this.fb.group({
      period_from: [''],
      period_to: [''],
      pos: ['-1'],
      producttype: ['-1'],
      organization_id: ['-1'],
      // user_id: [''],
      agent_code: ['-1']
    });

    this.dForm.get('organization_id').valueChanges.subscribe(val => {
      this.getUserList(val);
      this.dForm.patchValue({
        agent_code: '-1'
      })
    });
    this.dForm.get('pos').valueChanges.subscribe(val => {
      this.filterOrganisationsByPOS(val)
      this.dForm.patchValue({
        organization_id: '-1',
        agent_code: '-1'
      })
    });

    this.getOrganizationList();
  }

  getOrganizationList() {
    this.orgService
      .GetAllOrganization()
      .subscribe((result: any) => (this.organizations = result.Organization, this.filteredOrganizations = result.Organization));
  }

  getUserList(orgID: string = '') {
    this.userService
      .getAllUsersByOrganizationId(orgID)
      .subscribe((result: any) => {
        console.log('user ', result)
        if (result.users && result.users.length > 0) {
          this.users = result.users;
          setTimeout(this.initDropDowns, 2000);
        }
      });
  }

  filterOrganisationsByPOS(pos) {
    if (!pos)
      return;
    var filtered: Array<organizationH> = [];
    for (let ind = 0; ind < this.organizations.length; ind++) {
      const element = this.organizations[ind];
      if (element.corporate_type == pos)
        filtered.push(element)
    }
    this.filteredOrganizations = filtered;
  }

  ngOnInit() {
    this.submitForm()
  }

  ngAfterViewInit() {
    this.initDropDowns();
    $(document).ready(() => {
      $(() => {
        $('input[name="period_from"]').daterangepicker(
          {
            singleDatePicker: true,
            showDropdowns: true,
            startDate: moment().subtract("1", "years"),
            locale: {
              format: 'DD/MM/YYYY'
            },
            autoUpdateInput: false
          },
          start => {
            this.dForm.patchValue({
              period_from: moment(start).format('DD/MM/YYYY')
            });
          }
        );
        $('input[name="period_to"]').daterangepicker(
          {
            singleDatePicker: true,
            showDropdowns: true,
            startDate: moment(),
            locale: {
              format: 'DD/MM/YYYY'
            },
            autoUpdateInput: false
          },
          start => {
            this.dForm.patchValue({
              period_to: moment(start).format('DD/MM/YYYY')
            });
          }
        );
      });
    });
  }

  initDropDowns() {
    $('.ui.dropdown').dropdown();
  }

  calculateMarginfromPerformance() {
    let performance = this.performance;
    var output: MarginInfo = { tags: performance.tags, margin: [] };
    for (let ind = 0; ind < performance.markup_price.length; ind++) {
      const elementMarkupPrice = performance.markup_price[ind];
      const elementSupplierPrice = performance.supplier_price[ind];
      output.margin.push(Number(elementMarkupPrice) - Number(elementSupplierPrice))
    }
    this.margin = output;
    console.log('margin ', this.margin)
  }

  submitForm() {
    this.bookingsLoader = true;
    this.organisationLoader = true;
    let params = this.dForm.value;
    this.dashboardService.fetchPerformaceInformation(params)
      .subscribe((res: any) => {
        if (res.status == 200) {
          this.performance = res.Stats;
          this.calculateMarginfromPerformance();
          this.organisationLoader = false;
        }
      }, err => {
        this.toastr.info('Oops! We\'re unable to retrieve performance information.', 'No Performance Info', {
          timeOut: 10000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
        this.organisationLoader = false;
      })

    this.dashboardService.fetchBookingsInformation(params)
      .subscribe((res: any) => {
        if (res.status == 200) {
          this.bookings = res.Stats;
          this.bookings.total = 0;
          this.bookingsLoader = false;
        }
      }, err => {
        this.toastr.info('Oops! We\'re unable to retrieve bookings information.', 'No Bookings Info', {
          timeOut: 10000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
        this.bookingsLoader = false;
      })

    this.dashboardService.fetchPresetInformation(params)
      .subscribe((res: any) => {

        if (res.status == 200) {
          this.presetInfo = res.Stats;
          console.log("res =========================", this.presetInfo)
          this.bookingsLoader = false;
        }
      }, err => {
        // this.toastr.info('Oops! We\'re unable to retrieve bookings information.', 'No Presets Info', {
        //   timeOut: 10000,
        //   progressBar: false,

        //   positionClass: 'toast-bottom-right'
        // });
        // this.bookingsLoader = false;
      })

    // this.dashboardService.fetchProductivityInformation( params )
    // .subscribe((res:any)=>{
    //   if(res.status == 200){
    //     console.log('Productivity result ', res.Stats)
    //   }
    // }, err => {
    //   Swal.fire('Oops', `Something bad happened at our end. ${err}`, 'error');
    // })


    this.isSubmitted = true;
  }
}
