import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from 'src/app/shared/services/search.service';
import { BehalfService } from 'src/app/layout/search/flights/behalf.service';
import { bookingStatus, prepareGlobals } from "src/app/shared/utils/common";
import { CommonService } from 'src/app/shared/services/common.service';
import { Globals } from 'src/app/shared/utils/globals';
//import { Socket } from 'ngx-socket-io';

declare var $: any;
const moment = require("moment");

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup;
  submitted = false;
  page: number = 0;
  activeProducts: any;
  bookingStatus: any;
  suppliers: any;
  credit_limit: any;
  showcredit: boolean = true;
  globals: Globals;
  credit_limit_change;

  constructor(private router: Router,
    private fb: FormBuilder,
    private searchService: SearchService,
    private commonService: CommonService,
    private behalfService :BehalfService
    //private socket: Socket
  ) {
    this.searchForm = this.fb.group({
      page: this.page,
      trip_id: [''],
      agent_reference: [''],
      start_date: [''],
      end_date: [''],
      product_id: ['all'],
      supplier_id: ['all'],
      status: ['all']
    });
    this.behalfService.currentlimit.subscribe(credit_limit_change => this.credit_limit_change = credit_limit_change)
    this.behalfService.newcreditlimit = null;
  }

  get f() {
    return this.searchForm.controls;
  }

  userInfo: any = {};
  message: string;
  ngOnChange() {
    //console.log("newcreditlimitc",this.behalfService.currentlimit);
    
  }
  
  ngDoCheck(){
    this.credit_limit_change = this.behalfService.newcreditlimit ;
    console.log('credit limit gagan', this.credit_limit_change);
  }

  ngOnInit() {
    this.globals = prepareGlobals();
    this.userInfo = {
      username: this.globals.getUserUsername(),
      email: this.globals.getUserEmail(),
      isAdmin:this.globals.getUserAdmin(),
      currencyCode:this.globals.getCurrencyCode()

    }
    console.log("dataaaaaaaaaaaa",this.globals.getUser());
    console.log('isAdmin',this.userInfo.isAdmin);
    if(this.globals.getUser().organisation.org_id!=this.globals.getUser().organisation.parent_id){
      this.showcredit = false;
    }
    this.bookingStatus = bookingStatus;
    this.getSettings();
    this.getSuppliers();
    this.loadConfig();
    this.commonService.getOrganizationById(this.globals.getOrganisationID()).subscribe((result: any) =>{
      this.credit_limit = result.result.credit_limit;
      console.log(this.credit_limit);
    })

  }
  // tslint:disable-next-line:adjacent-overload-signatures



  getSettings() {
    let permArr = { "name": ['ActiveProducts'] };
    this.commonService.getSettingList(permArr).subscribe((result: any) => {
      let activeProductsData = JSON.parse(result.listData.find(list => list.name == 'ActiveProducts').value);
      let keyValue = Object.entries(activeProductsData).map(([key, value]) => ({ key, value }));
      this.activeProducts = keyValue.filter(o => Object.keys(o).some(k => o.value == 1));
    });
    this.globals = prepareGlobals();
    this.userInfo = {
      username: this.globals.getUserUsername(),
      email: this.globals.getUserEmail(),
      isAdmin:this.globals.getUserAdmin(),
      currencyCode:this.globals.getCurrencyCode()
    }
  }

  filterBookings() {
    this.submitted = true;

    // if (this.searchForm.invalid) {
    //   return;
    // }
    this.searchService.feedSearchData(this.searchForm.value);
    this.router.navigate(["/bookings"]);
  }

  // logout user and destroy session and local storage
  logout() {
    //this.socket.removeAllListeners('version-check');
    localStorage.clear();
    $('.ui.labeled.sidebar')
      .sidebar({
        dimPage: false,
        closable: false
      })
      .sidebar('hide');
    // localStorage.removeItem('userToken');
    this.router.navigate(["login"]);
  }

  toggleSidebar() {
    $(".ui.sidebar")
      .sidebar("setting", "dimPage", false)
      .sidebar("toggle");
  }

  searchFormReset() {
    this.searchForm.patchValue({
      agent_reference: '',
      product_id: 'all',
      start_date: '',
      end_date: '',
      supplier_id: 'all',
      status: 'all'
    });
    $('.ui.dropdown').dropdown();
  }

  // get suppliers
  getSuppliers() {
    this.commonService.getSupplierList().subscribe((result: any) => {
      // console.log("--result", result)
      this.suppliers = result.listData;
    });
  }

  ngAfterViewInit() {
    this.loadConfig();
    console.log("newcreditlimit",this.behalfService.currentlimit);
  }

  loadConfig() {
    var scope = this;
    $('.ui.dropdown').dropdown();
    $('input[name="start_date1"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 1901,
      autoUpdateInput: false,
      maxYear: parseInt(moment().format('YYYY'), 10)
    }, function (start, end, label) {
      var years = moment().diff(start, 'years');
      scope.searchForm.patchValue({ 'start_date': moment(start).format('YYYY-MM-DD') });
    });
    $('input[name="end_date1"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 1901,
      autoUpdateInput: false,
      maxYear: parseInt(moment().format('YYYY'), 10)
    }, function (start, end, label) {
      var years = moment().diff(start, 'years');
      scope.searchForm.patchValue({ 'end_date': moment(start).format('YYYY-MM-DD') });
    });
    // $('input[name="deadline_date"]').daterangepicker({
    //   singleDatePicker: true,
    //   showDropdowns: true,
    //   minYear: 1901,
    //   autoUpdateInput: false,
    //   maxYear: parseInt(moment().format('YYYY'), 10)
    // }, function (start, end, label) {
    //   var years = moment().diff(start, 'years');
    //   scope.searchForm.patchValue({ 'deadline_date': moment(start).format('YYYY-MM-DD') });
    // });
    // $("#showFilter").on("click", function () {
    //   $('.filterModal').show();
    // });

    //     $('.example .menu .browse')
    //   .popup({
    //     inline     : true,
    //     hoverable  : true,
    //     position   : 'bottom left',
    //     delay: {
    //       show: 300,
    //       hide: 800
    //     }
    //   })
    // ;

    var scope = this;
    $(".ui.dropdown").dropdown();
    $('input[name="booking_date"]').daterangepicker(
      {
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        autoUpdateInput: false,
        maxYear: parseInt(moment().format("YYYY"), 10)
      },
      function (start, end, label) {
        var years = moment().diff(start, "years");
        scope.searchForm.patchValue({
          booking_date: moment(start).format("YYYY-MM-DD")
        });
      }
    );
    $('input[name="traval_date"]').daterangepicker(
      {
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        autoUpdateInput: false,
        maxYear: parseInt(moment().format("YYYY"), 10)
      },
      function (start, end, label) {
        var years = moment().diff(start, "years");
        scope.searchForm.patchValue({
          traval_date: moment(start).format("YYYY-MM-DD")
        });
      }
    );
    $('input[name="deadline_date"]').daterangepicker(
      {
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        autoUpdateInput: false,
        maxYear: parseInt(moment().format("YYYY"), 10)
      },
      function (start, end, label) {
        var years = moment().diff(start, "years");
        scope.searchForm.patchValue({
          deadline_date: moment(start).format("YYYY-MM-DD")
        });
      }
    );
    // $('.text.custom.btn')
    //  .popup({
    //       hoverable  : true,
    //       position   : 'left center',
    //       popup: $('.custom.popup'),
    //       on: 'click',
    //         delay: {
    //           show: 300,
    //           hide: 800
    //               }
    //        })
    //     ;
    $('.text.custom.btn')
      .popup({
        position: 'right center',
        popup: $('.custom.popup'),
        on: 'click'
      })
      ;
    $("#filterBookData").on("click", function () {
      // $(".filterModal").modal("hide");
      scope.filterBookings();
    });
  }
}
