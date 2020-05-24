import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReportService } from 'src/app/shared/services/report/report.service';
import { ToastrService } from 'ngx-toastr';
import { SetupConfigService } from 'src/app/shared/services/setup-config/setup-config.service';
import { statusRow } from '../../../shared/utils/common';
import { ActivatedRoute, Router } from '@angular/router';
declare const $: any;
@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.scss']
})
export class SupplierEditComponent implements OnInit {

  agents: string[] = [];
  countries: string[] = [];
  supplierInfo: any = {};
  reissue: boolean;
  refund: boolean;
  refund_same: boolean;
  void_all: boolean;
  void_single: boolean;
  split: boolean;
  cancel: boolean;
  hold: boolean;
  reterive: boolean;
  free_service: boolean;
  paid_service: boolean;
  seats: boolean;
  fare_rules: boolean;
  iata_card: boolean;
  status: boolean;
  is_hotel: boolean;
  is_flight: boolean;
  is_holidays: boolean;
  is_activities: boolean;
  is_car: boolean;
  is_transfers: boolean;
  is_visa: boolean;
  is_insurance: boolean;
  short_code: string;
  statusRow: any = statusRow;


  constructor(
    private fb: FormBuilder,
    public reportService: ReportService,
    private toastr: ToastrService,
    private activeRoute: ActivatedRoute,
    public supplierService: SetupConfigService,
    private router: Router
  ) {
    let supplier_id = this.activeRoute.snapshot.params.id;
    // Get country list
    this.getSupplierInfo(supplier_id);
  }

  ngOnInit() {
    this.fetchAllAgents();
    this.fetchAllCountries();
  }
  ngAfterViewInit() {
    $(document).ready(function () {
      $('.ui.dropdown').dropdown();
      $('.dropdownOne').dropdown({ placeholder: 'choose Organisation' });
      $('.dropdownTwo').dropdown({ placeholder: 'choose status' });
      $('.dropdownthree').dropdown({ placeholder: 'choose Country' });

      $('.ui.dropdown').dropdown('refresh');
    });
  }

  supplierUpdateForm = this.fb.group({
    id: [''],
    credit_limit: [''],
    supplier_code: [''],
    contact: [''],
    country_id: [''],
    email: [''],
    credit_days: [''],
    website: [''],
    status: [''],
    organisation_id: [''],
    currency_id: [''],
    notification: [''],
    reissue: [''],
    refund: [''],
    refund_same: [''],
    void_all: [''],
    void_single: [''],
    split: [''],
    cancel: [''],
    hold: [''],
    reterive: [''],
    free_service: [''],
    paid_service: [''],
    seats: [''],
    fare_rules: [''],
    iata_card: [''],
    is_hotel: [''],
    is_flight: [''],
    is_holidays: [''],
    is_activities: [''],
    is_car: [''],
    is_transfers: [''],
    is_visa: [''],
    is_insurance: [''],
    short_code: [''],
    supplier_id: [''],
    isHotel: [''],
    isFlight: [''],
    isHoliday: [''],
    isActivity: [''],
    isCarhire: [''],
    isTransfer: [''],
    isVisa: [''],
    isInsurance: [''],
    name: ['']

  })

  fetchAllAgents() {
    this.reportService.GetAllAgents().subscribe((res: any) => {
      if (res.type != 'error') {
        if (res.Organization.length != 0) {
          this.agents = res.Organization;
        }
        else {
          this.toastr.info(`There is no agents available`, ``, {
            timeOut: 1000,
            progressBar: false,

            positionClass: 'toast-bottom-right'
          });
        }
      } else {
        this.toastr.error(`${res.msg}`, `${res.msg}`, {
          timeOut: 1000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      }
    })
  }

  fetchAllCountries() {
    this.supplierService.GetAllCountries().subscribe((res: any) => {
      if (res.type != 'error') {
        if (res.data.length != 0) {
          res.data.forEach(element => {
            this.countries.push(element);
          });
        }
        else {
          this.toastr.info(`There is no agents available`, ``, {
            timeOut: 1000,
            progressBar: false,

            positionClass: 'toast-bottom-right'
          });
        }
      } else {
        this.toastr.error(`${res.msg}`, `${res.msg}`, {
          timeOut: 1000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      }
    })
  }

  getSupplierInfo(supplier_id: Number) {
    this.supplierService.getSupplier(supplier_id).subscribe((res: any) => {
      console.log(res.result.name)

      if (res.type != 'error') {
        this.supplierInfo = res.result;
        if (res.result.reissue != 0) {
          this.reissue = true;
        } else {
          this.reissue = false;
        }
        if (res.result.refund != 0) {
          this.refund = true;
        } else {
          this.refund = false;
        }
        if (res.result.refund_same != 0) {
          this.refund_same = true;
        } else {
          this.refund_same = false;
        }
        if (res.result.void_all != 0) {
          this.void_all = true;
        } else {
          this.void_all = false;
        }
        if (res.result.void_single != 0) {
          this.void_single = true;
        } else {
          this.void_single = false;
        }
        if (res.result.void_single != 0) {
          this.void_single = true;
        } else {
          this.void_single = false;
        }
        if (res.result.split != 0) {
          this.split = true;
        } else {
          this.split = false;
        }
        if (res.result.cancel != 0) {
          this.cancel = true;
        } else {
          this.cancel = false;
        }
        if (res.result.hold != 0) {
          this.hold = true;
        } else {
          this.hold = false;
        }
        if (res.result.reterive != 0) {
          this.reterive = true;
        } else {
          this.reterive = false;
        }
        if (res.result.free_service != 0) {
          this.free_service = true;
        } else {
          this.free_service = false;
        }
        if (res.result.paid_service != 0) {
          this.paid_service = true;
        } else {
          this.paid_service = false;
        }
        if (res.result.seats != 0) {
          this.seats = true;
        } else {
          this.seats = false;
        }
        if (res.result.fare_rules != 0) {
          this.fare_rules = true;
        } else {
          this.fare_rules = false;
        }
        if (res.result.iata_card != 0) {
          this.iata_card = true;
        } else {
          this.iata_card = false;
        }
        if (res.result.status != 0) {
          this.status = true;
        } else {
          this.status = false;
        }
        if (res.result.is_hotel != 0) {
          this.is_hotel = true;
        } else {
          this.is_hotel = false;
        }
        if (res.result.is_flight != 0) {
          this.is_flight = true;
        } else {
          this.is_flight = false;
        }
        if (res.result.is_activities != 0) {
          this.is_activities = true;
        } else {
          this.is_activities = false;
        }
        if (res.result.is_car != 0) {
          this.is_car = true;
        } else {
          this.is_car = false;
        }
        if (res.result.is_holidays != 0) {
          this.is_holidays = true;
        } else {
          this.is_holidays = false;
        }
        if (res.result.is_insurance != 0) {
          this.is_insurance = true;
        } else {
          this.is_insurance = false;
        }
        if (res.result.is_transfers != 0) {
          this.is_transfers = true;
        } else {
          this.is_transfers = false;
        }
        if (res.result.is_visa != 0) {
          this.is_visa = true;
        } else {
          this.is_visa = false;
        }

        if (res.result.short_code != null) {
          this.short_code = res.result.short_code;
        } else {
          this.short_code = "";
        }

        console.log("status", res.result.status)
        this.supplierUpdateForm.patchValue({
          id: supplier_id,
          website: res.result.website,
          email: res.result.email,
          contact: res.result.contact,
          supplier_code: res.result.supplier_code,
          credit_days: res.result.credit_days,
          credit_limit: res.result.credit_limit,
          notification: res.result.credit_limit,
          organisation_id: res.result.organisation_id,
          currency_id: res.currency.currency_id,
          country_id: res.country.country_id,
          status: this.status,
          reissue: this.reissue,
          refund: this.refund,
          refund_same: this.refund_same,
          void_all: this.void_all,
          void_single: this.void_single,
          split: this.split,
          cancel: this.cancel,
          hold: this.hold,
          reterive: this.reterive,
          free_service: this.free_service,
          paid_service: this.paid_service,
          seats: this.seats,
          fare_rules: this.fare_rules,
          iata_card: this.iata_card,
          short_code: this.short_code,
          is_hotel: this.is_hotel,
          is_flight: this.is_flight,
          is_holidays: this.is_holidays,
          is_activities: this.is_activities,
          is_car: this.is_car,
          is_transfers: this.is_transfers,
          is_visa: this.is_visa,
          is_insurance: this.is_insurance,
          supplier_id: supplier_id,
          isHotel: this.is_hotel,
          isFlight: this.is_flight,
          isHoliday: this.is_holidays,
          isActivity: this.is_activities,
          isCarhire: this.is_car,
          isTransfer: this.is_transfers,
          isVisa: this.is_visa,
          isInsurance: this.is_insurance,
          name: ''
        });
      }
      // this.router.navigate(['user-role-management/list-user'])
    });
  }
  updateSupplier = () => {
    console.log(this.supplierUpdateForm.value);
    let supplier_id = this.supplierUpdateForm.value.id;
    console.log(supplier_id);
    let updateForm: any;
    updateForm = this.supplierUpdateForm.value;
    this.supplierService.updateSupplier(supplier_id, updateForm).subscribe((result: any) => {
      if (result.type == 'error') {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 1000,
          progressBar: true,
          progressAnimation: 'decreasing',
          positionClass: 'toast-bottom-right'
        });
      } else {
        this.toastr.info(`${result.msg}`, `${result.msg}`, {
          timeOut: 1000,
          progressBar: true,
          progressAnimation: 'decreasing',
          positionClass: 'toast-bottom-right'
        });
        // this.router.navigate(['user-role-management/list-user'])
      }
    });
  }

}