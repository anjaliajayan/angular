import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { AirlineCommission } from 'src/app/shared/models/setup-config/airline-commission';
import { SetupConfigService } from 'src/app/shared/services/setup-config/setup-config.service';
import { ToastrService } from 'ngx-toastr';
import { ReportService } from 'src/app/shared/services/report/report.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { rbdArrayList } from "src/app/shared/utils/common";
import Swal from 'sweetalert2';
import { environment } from './../../../../../environments/environment';

declare const moment: any;
declare const $: any;
@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.scss']
})
export class CommissionComponent implements OnInit {

  submitted: any = false;
  showAddCommision: boolean = true;
  showListCommision: boolean = false;
  NewAirlineCommission: Array<[AirlineCommission]> = [];
  totalAirlineCommissions: number = 0;
  pageCommission: number = 0;
  airlines: string[] = [];
  suppliers: string[] = [];
  origins: string[] = [];
  destinations: string[] = [];
  rbdArrayList: string[] = [];
  limit: number = 15;
  pageIndex: number = 1;
  pages: number = 0;
  showSaveBtn: boolean = true;
  commissionForm: any = {
    page: this.pageCommission
  }
  offset: number = 0;
  totalCount: number = 0;
  filterParams: any = {
    page: this.offset,
  }
  commissionPage = 0;
  rbdArr = [];
  destArr = [];
  orgArr = [];
  supplierArr = [];
  toggleObj:any={};
  constructor(
    private fb: FormBuilder,
    public AirlineDealService: SetupConfigService,
    private toastr: ToastrService,
    public reportService: ReportService,
    public commonService: CommonService) { }

  newAddCommissionForm = this.fb.group({
    commission_id: [''],
    supplier: [''],
    airline: [''],
    trip_type: [''],
    cabin_class: [''],
    commission: [''],
    commissionmode: [''],
    orgin: [''],
    destination: [''],
    sale_start_date: [''],
    sale_end_date: [''],
    travel_start_date: [''],
    travel_end_date: [''],
    rbd: [''],
    mode:['']
  })

  onAddCommision() {
    this.loadConfig();
    this.loadSaleEndDate();
    this.loadSaleStartDate();
    this.loadTravelStartDate();
    this.loadTravelEndDate();
    this.showAddCommision = false;
    this.showListCommision = true;
  }

  fetchAllSuppliers() {

    this.reportService.GetAllSuppliers().subscribe((res: any) => {
      if (res.status) {
        this.suppliers  = res.result.filter(data => data.name !== "");
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

  fetchAllAirportDetails = () => {
    this.commonService.getAirportsList()
      .subscribe((res: any) => {
        if (res.status) {
          this.origins = res.result;
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

  fetchAllAirlineCommissions(filterParams) {
    this.AirlineDealService.GetAllAirCommissions(this.filterParams)
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
          this.NewAirlineCommission = res.result.data;
        }
        else {
          this.toastr.error(`${res.message}`, ``, {
            timeOut: 1000,
            progressBar: false,

            positionClass: 'toast-bottom-right'
          })
        }
      });
  }

  onListCommission() {
    this.loadConfig();
    this.showAddCommision = true;
    this.showListCommision = false;
  }

  get fc() { return this.newAddCommissionForm.controls; }

  addCommission = () => {
    this.newAddCommissionForm.patchValue({
      mode:"Add",
      commission_id:''
    })
    this.AirlineDealService.addCommission(this.newAddCommissionForm.value).subscribe((result: any) => {

      if (result.status) {
        this.toastr.error(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
        this.fetchAllAirlineCommissions(this.filterParams);
        this.resetForm();
      } else {
        this.toastr.success(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });


      }
    })

  }

  editCommission(valObj: any) {

    let airlineCommission = JSON.parse(valObj.rbd_commission).commission;
    let commissionMode = JSON.parse(valObj.rbd_commission).commissionmode;

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
    this.showAddCommision = false;
    this.showSaveBtn = false;
    this.showListCommision = true

    console.log("supplier:::::::",valObj.supplier)

    this.newAddCommissionForm.patchValue({
      commission_id: valObj.commission_id,
      airline: valObj.airline,
      supplier: valObj.supplier,
      tourcode: valObj.tourcode,
      trip_type: valObj.trip_type,
      code_type: valObj.code_type,
      cabin_class: valObj.cabin_class,
      tourcode_name: valObj.tourcode_name,
      apply_type: valObj.apply_type,
      commission: airlineCommission,
      commissionmode: commissionMode,
      orgin: this.orgArr,
      destination: this.destArr,
      rbd: this.rbdArr,
      sale_start_date: valObj.sale_start_date,
      sale_end_date: valObj.sale_end_date,
      travel_start_date: valObj.travel_end_date,
      travel_end_date: valObj.travel_start_date
    });

  }

  updateCommission() {
    this.newAddCommissionForm.patchValue({
      mode:"Update"
    })
    let commission_id = this.newAddCommissionForm.value.commission_id;
    this.AirlineDealService.getUpdateCommission(commission_id, this.newAddCommissionForm.value).subscribe((result: any) => {
      if (result.status) {
        this.toastr.success(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
        this.fetchAllAirlineCommissions(this.filterParams);
        this.resetForm();
      } else {
        this.toastr.error(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }

    });
  }

  deleteCommission(valObj: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.AirlineDealService.deleteCommission(valObj.commission_id).subscribe((result: any) => {
          console.log("result:::", result)
          if (result.type == 'error') {
            this.toastr.error(`${result.msg}`, ``, {
              timeOut: 1000,
              progressBar: false,

              positionClass: 'toast-bottom-right'
            });
          } else {
            this.toastr.success(`${result.msg}`, ``, {
              timeOut: 1000,
              progressBar: false,

              positionClass: 'toast-bottom-right'
            });
            this.fetchAllAirlineCommissions(this.filterParams);
          }
        })
      }
    })
  }

  ngOnInit() {
    this.fetchAllAirlineCommissions(this.filterParams);
    this.fetchAllSuppliers();
    this.fetchAllAirportDetails();
    this.rbdArrayList = rbdArrayList;
    this.fetchAllAirlines();
    this.loadConfig();
  }

  ngAfterViewInit() {
    this.loadConfig();
    this.loadSaleEndDate();
    this.loadSaleStartDate();
    this.loadTravelStartDate();
    this.loadTravelEndDate();

  }

  loadConfig() {
    var scope = this;
    $(document).ready(function () {
      $('.menu .item').tab();
      $('.ui.dropdown').dropdown();
      $('.dropdown1').dropdown({ placeholder: "RBD", });
      $('.dropdown2').dropdown({ placeholder: "Choose suppliers", });
      $('.dropdown3').dropdown({ placeholder: "Choose airlines", });
      $('.dropdown4').dropdown({ placeholder: "Choose origin airports", });
      $('.dropdown5').dropdown({ placeholder: "Choose Destination airports", });

    });
    $(document).ready(function () {
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
        scope.newAddCommissionForm.get('sale_start_date').setValue(moment(start).format('DD-MM-YYYY'));
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
        startDate: moment(),
        minDate: moment(),
        autoUpdateInput: false,
        maxYear: parseInt(moment().format('YYYY'), 10)
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.newAddCommissionForm.get('sale_end_date').setValue(moment(start).format('DD-MM-YYYY'));
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
        scope.newAddCommissionForm.get('travel_start_date').setValue(moment(start).format('DD-MM-YYYY'));
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
        startDate: moment(),
        minDate: moment(),
        autoUpdateInput: false,
        maxYear: parseInt(moment().format('YYYY'), 10)
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.newAddCommissionForm.get('travel_end_date').setValue(moment(start).format('DD-MM-YYYY'));
      });
    });
  }

  resetForm() {
    this.newAddCommissionForm.reset();
    this.onListCommission();
  }
  
  pageCallback(event: any) {
    let offset = event.offset;
    this.commissionForm.page = offset;
    this.fetchAllAirlineCommissions(this.filterParams);
  }
  statusToggle(data:any){
    this.toggleObj.id=data.commission_id;
    this.toggleObj.status=data.is_active;
    this.toggleObj.table="commissions";
    this.AirlineDealService.onStatusToggle(this.toggleObj)
    .subscribe((res: any) => {
      if (res.status == 200) {
        this.fetchAllAirlineCommissions(this.filterParams);
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
}
