import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PointOfSale } from 'src/app/shared/models/point-of-sale.interface';
import { PointOfSaleService } from 'src/app/shared/services/point-of-sale.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';
import { organizationTypes } from "src/app/shared/utils/common";
import { element } from 'protractor';

declare const moment: any;
declare const $: any;
@Component({
  selector: 'app-pos-read',
  templateUrl: './pos-read.component.html',
  styleUrls: ['./pos-read.component.scss']
})
export class PosReadComponent implements OnInit {

  filterForm: FormGroup;
  constructor(
    private pointOfSaleService: PointOfSaleService,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({ corporate_type: [''], nameAndOfficeId: [''] })
  }
  organizationTypes = organizationTypes;
  limit: number = 15;
  pageIndex: number = 1;
  pointOfSales: Array<PointOfSale[]> = [];
  totalPos: number = 0;
  pages: number = 0;

  filterParams: any = {
    limit: 1500,
    page: 0,
    corporate_type: '',
    nameAndOfficeId: ''
  }

  toggleObj: any = {}
  ngOnInit() {
    this.getList(this.filterParams);
  }
  getList(filterParams: any) {
    this.pointOfSaleService.getList(filterParams).subscribe((result: any) => {    
      if(result.result.data)
      result.result.data.map((value,key) => {
        value.id=key+1;
      });    
      this.pointOfSales = result.result.data;
      this.totalPos = result.total;
    })

  }

  filterFormSubmit() {
    this.filterParams.corporate_type = this.filterForm.value.corporate_type;
    this.filterParams.nameAndOfficeId = this.filterForm.value.nameAndOfficeId;
    this.getList(this.filterParams);
  }

  viewUser(valObj: any) {
    this.router.navigate(['basic-edit/' + valObj.organisation_id]);
  }

  deleteUser(valObj: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {

        // delete record api
        this.pointOfSaleService.deletePos(valObj.organisation_id).subscribe((result: any) => {
          if (result.status == false) {
            this.toastr.error(`${result.message}`, ``, {
              timeOut: 10000,
              progressBar: false,
              positionClass: 'toast-top-right'
            });
          } else {
            this.toastr.success(`${result.message}`, ``, {
              timeOut: 10000,
              progressBar: false,
              positionClass: 'toast-top-right'
            });
            this.getList(this.filterParams);
          }
        })

      }
    })

  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('.menu .item').tab();
      $('.ui.checkbox').checkbox('attach events', '.toggle.button');
      $('.ui.dropdown').dropdown();
      $('.dropdown1').dropdown({ placeholder: 'Organisation Type ' });
    });
  }

  viewPOSPage(valObj) {
    let navigationExtras: NavigationExtras = {
      queryParams: valObj
    }
    this.router.navigate(['/pos/basic-edit/'+ valObj.organisation_id])

  }

  statusToggle(data:any){
    this.toggleObj.id=data.organisation_id;
    this.toggleObj.status=data.is_active;
    this.toggleObj.table="organisation";
    this.pointOfSaleService.onStatusToggle(this.toggleObj)
    .subscribe((res: any) => {
      if (res.status == 200) {
        this.getList(this.filterParams);
      }
      else {
        this.toastr.error(`${res.msg}`, `${res.msg}`, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-top-right'
        })
      }
    });
    }

    resetFilterPos(){
      this.filterForm.reset();
      $('.ui.dropdown').dropdown('clear');

    }
}
