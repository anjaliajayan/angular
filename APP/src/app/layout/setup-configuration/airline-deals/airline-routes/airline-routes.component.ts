import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AirlineDeals } from 'src/app/shared/models/setup-config/airline-deals';
import { SetupConfigService } from 'src/app/shared/services/setup-config/setup-config.service';
import { ToastrService } from 'ngx-toastr';
import { ReportService } from 'src/app/shared/services/report/report.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { rbdArrayList } from "src/app/shared/utils/common";
import Swal from 'sweetalert2';
import { AirlineRoutes } from 'src/app/shared/models/setup-config/airline-routes';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

declare const moment: any;
declare const $: any;

@Component({
  selector: 'app-airline-routes',
  templateUrl: './airline-routes.component.html',
  styleUrls: ['./airline-routes.component.scss']
})
export class AirlineRoutesComponent implements OnInit {

  addAirlineRoutesForm: FormGroup;
  showAddCode: boolean = true;
  showListCode: boolean = false;
  showSaveBtn: boolean = true;
  limit: number = 15;
  pageIndex: number = 1;
  pageAirline: number = 0;
  allAirlineRoutes: Array<[AirlineRoutes]> = [];
  allPos = [];
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

  totalAirlineRoutes: number = 0;
  airlinePage = 0;
  rbdArr = [];
  destArr = [];
  orgArr = [];
  pref_arr = []
  supplierArr = [];
  toggleObj: any = {};
  routes: any;
  isSubmitted = false;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  chipList: any;


  constructor(private fb: FormBuilder,
    public AirlineDealService: SetupConfigService,
    private toastr: ToastrService,
    public reportService: ReportService,
    public commonService: CommonService) { }



  ngOnInit() {
    this.initForm()
    this.fetchAllPOS({limit:1500});
    this.fetchAllSuppliers();
    this.fetchAllAirportDetails();
    this.getAllAirlines();
    this.fetchAllAirlineRoutes(this.filterParams);

  }

  ngAfterViewInit() { this.loadConfig(); }

  get f() { return this.addAirlineRoutesForm.controls; }

  initForm() {
    this.addAirlineRoutesForm = this.fb.group({
      routes_id: [''],
      organisation_id: [''],
      supplier: [''],
      trip_type: [''],
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      routes: [[]],
      mode: ['']
    });
  }

  onClickAddCode() {
    this.loadConfig();
    this.showAddCode = false;
    this.showListCode = true;
    this.showSaveBtn = true;
  }

  onClickListCode() {
    this.loadConfig();
    // this.addAirlineRoutesForm.reset();
    this.showAddCode = true;
    this.showListCode = false;
  }

  fetchAllSuppliers() {
    this.commonService.getSupplierList().subscribe((res: any) => {
      if (res.type == 'data') {
        this.suppliers = res.listData;
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

  fetchAllPOS(params) {

    this.AirlineDealService.fetchAllPointofSale(params)
      .subscribe((res: any) => {
        if (res.status) {
          this.allPos = res.result.data;
        }
      }, err => {
        console.log('erer ', err)
      });
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

  getAllAirlines() {
    this.commonService.getAirlines().subscribe((result: any) => {
      if (result.type == 'data') {
        this.airlines = result.airlines;
      }
      else {
        this.toastr.error(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }

    })
  }

  saveAirlineRoutes() {
    this.isSubmitted = true;

    if (this.addAirlineRoutesForm.invalid) {

      this.toastr.error(`Please fill Mandatory Fieilds`, ``, {
        timeOut: 1000,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      });
      return;
    }
    this.addAirlineRoutesForm.patchValue({
      mode: "Add",
      routes_id: ''
    })
    this.AirlineDealService.addAirlineRoutes(this.addAirlineRoutesForm.value).subscribe((result: any) => {

      if (result.status) {
        this.toastr.success(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
        this.fetchAllAirlineRoutes(this.filterParams);
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


  deleteAirlineRoutes(valObj: any) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.AirlineDealService.deleteAirlineRoutes({routes_id:valObj.routes_id}).subscribe((result: any) => {
          if (result.status) {
            this.toastr.success(`${result.message}`, ``, {
              timeOut: 1000,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
            this.fetchAllAirlineRoutes(this.filterParams);
          } else {
            this.toastr.error(`${result.message}`, ``, {
              timeOut: 1000,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
            // this.fetchAllAirlineDeals();
          }
        })
      }
    })
  }

  editAirlineRoutes(valObj: any) {

    valObj.destination.forEach(element => {
      this.destArr.push(element.text);
    });

    valObj.origin.forEach(element => {
      this.orgArr.push(element.text);
    });

    valObj.routes.forEach(element => {
      this.pref_arr.push({name:element.name});
    });

    valObj.supplier.forEach(element => {
      this.suppliers.push(element);
    });

    this.loadConfig();
    this.showSaveBtn = false;
    this.showAddCode = false;
    this.showListCode = true;

    this.addAirlineRoutesForm.patchValue({
      organisation_id:valObj.organisation_id,
      origin: this.orgArr,
      destination: this.destArr,
      routes:this.pref_arr,
      supplier:this.suppliers,
      trip_type:valObj.trip_type,
      routes_id:valObj.routes_id

    });
  }

  updateAirlineRoutes() {
    this.addAirlineRoutesForm.patchValue({
      mode: "Update",
      routes_id: this.addAirlineRoutesForm.value.routes_id
    })
    this.AirlineDealService.getUpdateAirlineRoutes(this.addAirlineRoutesForm.value).subscribe((result: any) => {
      if (result.status) {
        this.toastr.success(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
        this.fetchAllAirlineRoutes(this.filterParams);
      } else {
        this.toastr.error(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }
      // this.fetchAllAirlineDeals();
      this.resetForm();
    });

  }

  resetForm() {
    this.addAirlineRoutesForm.reset();
    this.onClickListCode()
  }

  loadConfig() {
    var scope = this;
    $(document).ready(function () {
      $('.menu .item').tab();
      $('.ui.dropdown').dropdown();
      $('.dropdown1').dropdown({ placeholder: "RBD", });
      $('.dropdown2').dropdown({ placeholder: "Choose suppliers", });
      $('.dropdown6').dropdown({ placeholder: "Choose Organisations", });
      $('.dropdown3').dropdown({ placeholder: "Choose airlines", });
      $('.dropdown4').dropdown({ placeholder: "Choose origin airports", });
      $('.dropdown5').dropdown({ placeholder: "Choose Destination airports", });
    });
  }

  statusToggle(data: any) {
    this.toggleObj.id = data.routes_id;
    this.toggleObj.status = data.is_active;
    this.toggleObj.table = "routes";
    console.log("data::::",data)
    this.AirlineDealService.onStatusToggle(this.toggleObj)
      .subscribe((res: any) => {
        if (res.status) {
          this.fetchAllAirlineRoutes(this.filterParams);
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

  fetchAllAirlineRoutes(filterParams) {
    this.AirlineDealService.getAllAirlineRoutes(this.filterParams).subscribe((result: any) => {
      if (result.status) {
        this.totalCount = result.result.total;
        this.offset = result.result.page;

        result.result.data.map(ele => {
          if (ele.origin) {
            ele.origin = JSON.parse(ele.origin);
          }
          if (ele.destination) {
            ele.destination = JSON.parse(ele.destination);
          }
     
          if (ele.routes) {
            ele.routes = JSON.parse(ele.routes);
          }
          // if (ele.supplier) {
          //   ele.supplier = JSON.parse(ele.supplier);
          // }
        })

        this.allAirlineRoutes = result.result.data;
      }
      else {
        this.toastr.error(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }

    })
  }

  add(event: MatChipInputEvent, chk): void {
    const input = event.input;
    const value = event.value.toUpperCase();
    if ((value || '').trim()) {
      if (chk == 1)
        this.addAirlineRoutesForm.value.routes.push(({ name: value.trim() }));
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

  }

  remove(val: any, chk): void {
    const index1 = this.addAirlineRoutesForm.value.routes.indexOf(val);

    if (true) {
      if (chk == 1)
        this.addAirlineRoutesForm.value.routes.splice(index1, 1);
    }
  }
  
  pageCallback(event: any) {
    let offset = event.offset;
    this.airlineForm.page = offset;
    this.fetchAllAirlineRoutes(this.filterParams);
  }


}
