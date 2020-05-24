import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { AirlineDeals } from 'src/app/shared/models/setup-config/airline-deals';
import { SetupConfigService } from 'src/app/shared/services/setup-config/setup-config.service';
import { ToastrService } from 'ngx-toastr';
import { ReportService } from 'src/app/shared/services/report/report.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { rbdArrayList } from "src/app/shared/utils/common";
import Swal from 'sweetalert2';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { environment } from './../../../../../environments/environment';

declare const moment: any;
declare const $: any;
@Component({
  selector: 'app-tourcode',
  templateUrl: './tourcode.component.html',
  styleUrls: ['./tourcode.component.scss']
})
export class TourcodeComponent implements OnInit {

  showAddCode: boolean = true;
  showListCode: boolean = false;
  showSaveBtn: boolean = true;
  limit: number = 15;
  pageIndex: number = 1;
  pageAirline: number = 0;
  NewAirlineDeals: Array<[AirlineDeals]> = [];
  totalAirlineDeals: number = 0;
  pages: number = 0;
  airlines: string[] = [];
  suppliers: string[] = [];
  origins: string[] = [];
  destinations: string[] = [];
  rbdArrayList: string[] = [];
  airlineForm: any = {
    page: this.pageAirline
  }
  offset: number = 0;
  totalCount: number = 0;
  filterParams: any = {
    page: this.offset,
  }
  airlinePage = 0;
  rbdArr = [];
  destArr = [];
  orgArr = [];
  supplierArr = [];
  toggleObj:any={};

  constructor(private fb: FormBuilder,
    public AirlineDealService: SetupConfigService,
    private toastr: ToastrService,
    public reportService: ReportService,
    public commonService: CommonService) {
      
    }

  newAddTourCodeForm = this.fb.group({
    tourcode_id: [''],
    airline: [''],
    supplier: [''],
    tourcode: [''],
    trip_type: [''],
    code_type: [''],
    cabin_class: [''],
    tourcode_name: [''],
    apply_type: [''],
    orgin: [''],
    destination: [''],
    rbd: [''],
    airline_commission: [''],
    shared_commission: [''],
    tour_commission: [''],
    sale_start_date: [''],
    sale_end_date: [''],
    travel_start_date: [''],
    travel_end_date: [''],
    mode:['']
  });

  ngOnInit() {
    
    this.fetchAllAirlineDeals(this.filterParams);
    // this.fetchAllAirportDetails();
    this.rbdArrayList = rbdArrayList;
    this.fetchAllAirlines();
    this.fetchAllSuppliers();
    this.searchAirport();
  }

  ngAfterViewInit() {
    this.loadConfig();
    this.loadSaleEndDate();
    this.loadSaleStartDate();
    this.loadTravelStartDate();
    this.loadTravelEndDate();
  }


  fetchAllAirlineDeals(filterParams) {

    this.AirlineDealService.GetAllAirlines(this.filterParams)
      .subscribe((res: any) => {
        if (res.status) {
          this.totalCount = res.result.total;
          this.offset = res.result.page;
          res.result.data.map(ele => {
            if (ele.orgin) {
              ele.orgin = JSON.parse(ele.orgin);
            }
            if (ele.destination) {
              ele.destination = JSON.parse(ele.destination);
            }
            if (ele.rbd) {
              ele.rbd = JSON.parse(ele.rbd);
            }
            if (ele.supplier) {
              ele.supplier = JSON.parse(ele.supplier);
            }
          })
          this.NewAirlineDeals = res.result.data;    
        }
        else {
          this.toastr.error(`${res.message}`, `${res.message}`, {
            timeOut: 1000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          })
        }

      });
  }


  onClickAddCode() {
    this.loadConfig();
    this.loadSaleEndDate()
    this.loadSaleStartDate();
    this.loadTravelStartDate();
    this.loadTravelEndDate();
    this.showAddCode = false;
    this.showListCode = true;
    this.showSaveBtn = true;
    this.newAddTourCodeForm.reset();
  }

  onClickListCode() {
    this.loadConfig();
    this.newAddTourCodeForm.reset();
    this.showAddCode = true;
    this.showListCode = false;
  }

  fetchAllSuppliers() {
    this.commonService.getSupplierList().subscribe((res: any) => {
      if (res.type != 'error') {
        this.suppliers = res.listData;
      }
      else {
        this.toastr.error(`${res.msg}`, `${res.msg}`, {
          timeOut: 1000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      }
    })
  }

  fetchAllAirportDetails = () => {
    this.commonService.getAirportsList()
      .subscribe((res: any) => {
        if (res.status) {
          // this.origins = res.result;
          this.destinations = res.result;
        }
        else {
          this.toastr.error(`${res.message}`, ``, {
            timeOut: 1000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
        }

      })
  }

  fetchAllAirlines() {
    this.commonService.getAirlines().subscribe((result: any) => {
      if (result.type == 'data') {
        this.airlines = result.airlines;
      }
      else {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }

    })
  }

  loadSaleStartDate() {
    var scope = this;
    $(function () {
      $('input[name="sale_start_date"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1980,
        startDate: moment().subtract(90, 'day'),
        autoUpdateInput: false,
        maxYear: parseInt(moment().format('YYYY'), 10)
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.newAddTourCodeForm.get('sale_start_date').setValue(moment(start).format('DD/MM/YYYY'));
      });
    });
  }

  loadSaleEndDate() {
    var scope = this;
    $(function () {
      $('input[name="sale_end_date"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment().subtract(90, 'day'),
        autoUpdateInput: false,
        maxYear: parseInt(moment().format('YYYY'), 10)
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.newAddTourCodeForm.get('sale_end_date').setValue(moment(start).format('DD/MM/YYYY'));
      });
    });
  }

  loadTravelStartDate() {
    var scope = this;
    $(function () {
      $('input[name="travel_start_date"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1980,
        startDate: moment().subtract(90, 'day'),
        autoUpdateInput: false,
        maxYear: parseInt(moment().format('YYYY'), 10)
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.newAddTourCodeForm.get('travel_start_date').setValue(moment(start).format('DD/MM/YYYY'));
      });
    });
  }

  loadTravelEndDate() {
    var scope = this;
    $(function () {
      $('input[name="travel_end_date"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment().subtract(90, 'day'),
        autoUpdateInput: false,
        maxYear: parseInt(moment().format('YYYY'), 10)
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.newAddTourCodeForm.get('travel_end_date').setValue(moment(start).format('DD/MM/YYYY'));
      });
    });
  }

  saveTourCode() {

    this.newAddTourCodeForm.patchValue({
      mode:"Add",
      tourcode_id:""
    });
    this.AirlineDealService.addTourCodeSupplier(this.newAddTourCodeForm.value).subscribe((result: any) => {

      if (result.status) {
        this.toastr.success(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
        this.fetchAllAirlineDeals(this.filterParams);
        this.resetForm();
      } else {
        this.toastr.error(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });

   
      }
    })
  }

  pageCallback(event: any) {
    let offset = event.offset;
    this.filterParams.page = offset;
    this.fetchAllAirlineDeals(this.filterParams);
  }

  deleteTourCode(valObj: any) {
    let tourcode_id={}
    tourcode_id={tourcode_id:valObj.tourcode_id}
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.AirlineDealService.deleteTourcode(tourcode_id).subscribe((result: any) => {
          if (result.status) {
            this.toastr.success(`${result.message}`, ``, {
              timeOut: 1000,
              progressBar: false,

              positionClass: 'toast-bottom-right'
            });
          } else {
            this.toastr.error(`${result.message}`, ``, {
              timeOut: 1000,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
            this.fetchAllAirlineDeals(this.filterParams);
          }
        })
      }
    })
  }

  editTourCode(valObj: any) {

    let airlineCommission = JSON.parse(valObj.rbd_commission).commission;
    let commissionMode = JSON.parse(valObj.rbd_commission).commissionmode;
    let sharedCommission = JSON.parse(valObj.rbd_commission).sharedcommission;

    console.log("valObj:typeof::",typeof valObj.rbd)
    valObj.rbd.forEach(element => {

      this.rbdArr.push(element.text);
    });

    valObj.destination.forEach(element => {
      this.destArr.push(element.text);
    });

    valObj.orgin.forEach(element => {
      this.orgArr.push(element.text);
    });


    this.loadConfig();
    this.showSaveBtn = false;
    this.showAddCode = false;
    this.showListCode = true;

    const uniqueOrgArr = new Set(this.orgArr);
    const uniqueDesArr = new Set(this.destArr);
    const uniqueRbdArr = new Set(this.rbdArr);

    this.newAddTourCodeForm.patchValue({
      tourcode_id: valObj.tourcode_id,
      airline: valObj.airline,
      supplier: valObj.supplier,
      tourcode: valObj.tourcode,
      trip_type: valObj.trip_type,
      code_type: valObj.code_type,
      cabin_class: valObj.cabin_class,
      tourcode_name: valObj.tourcode_name,
      apply_type: valObj.apply_type,
      orgin: [...uniqueOrgArr],
      destination: [...uniqueDesArr],
      rbd: [...uniqueRbdArr],
      airline_commission: airlineCommission,
      shared_commission: sharedCommission,
      tour_commission: commissionMode,
      sale_start_date: valObj.sale_start_date,
      sale_end_date: valObj.sale_end_date,
      travel_start_date: valObj.travel_end_date,
      travel_end_date: valObj.travel_start_date
    });
  }

  updateTourCode() {
    this.newAddTourCodeForm.patchValue({
      mode:"Update"
    });
// console.log(this.newAddTourCodeForm.value);
//     return;
    let tourcode_id = this.newAddTourCodeForm.value.tourcode_id;
    this.AirlineDealService.getUpdateTourCode(tourcode_id, this.newAddTourCodeForm.value).subscribe((result: any) => {
      if (result.status) {
        this.toastr.success(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      } else {
        this.toastr.error(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      }
      this.fetchAllAirlineDeals(this.filterParams);
      this.resetForm();
    });

  }

  resetForm() {
    this.newAddTourCodeForm.reset();
    this.onClickListCode()
  }

  loadConfig() {
    var scope = this;
    // $(document).ready(function () {
    //   $('.menu .item').tab();
    //   $('.ui.dropdown').dropdown();
    //   $('.dropdown1').dropdown({ placeholder: "RBD", });
    //   $('.dropdown2').dropdown({ placeholder: "Choose suppliers", });
    //   $('.dropdown3').dropdown({ placeholder: "Choose airlines", });
    //   $('.dropdown4').dropdown({ placeholder: "Choose origin airports", });
    //   $('.dropdown5').dropdown({ placeholder: "Choose Destination airports", });
    // });
    $(document).ready(function () {
      $('.menu .item').tab();
      $('.ui.dropdown').dropdown();
      $('.dropdown1').dropdown({ placeholder: "RBD", });
      $('.dropdown2').dropdown({ placeholder: "Choose suppliers", });
      $('.dropdown3').dropdown({ placeholder: "Choose airlines", });
      $('.dropdown4').dropdown({ placeholder: "Choose origin airports", });
      $('.dropdown5').dropdown({ placeholder: "Choose Destination airports", });
      this._globals=localStorage.getItem('_globals');
      let token=JSON.parse(this._globals).token;
     
      $('.ui.dropdown4').dropdown({
        type: 'category',
        minCharacters : 2,
        maxCharacters : 3,
        responseAsync: true,
        apiSettings: {
          url: environment.serverURL + '/api/get-airports-cache/{query}',
          beforeXHR: function (xhr) {
            xhr.setRequestHeader('Authorization',token);
            return xhr;
          },
          onResponse: function (response) {
            const result = { success: true, results: [] };
            $.each(response.result, function (index, item) {

              result['results'].push({
                name: item.AirportCode, 
                value: item.AirportCode
              })
            });

            return result;
          },
        },
      })
    });
  }

  statusToggle(data:any){
    this.toggleObj.id=data.tourcode_id;
    this.toggleObj.status=data.is_active;
    this.toggleObj.table="tourcodes";
    this.AirlineDealService.onStatusToggle(this.toggleObj)
    .subscribe((res: any) => {
      if (res.status == 200) {
        this.fetchAllAirlineDeals(this.filterParams);
      }
      else {
        this.toastr.error(`${res.msg}`, `${res.msg}`, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        })
      }
    });
    }
    searchAirport(){
      
    }

}
