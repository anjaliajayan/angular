import { Component, OnInit } from '@angular/core';
import { ListOfSupplers } from 'src/app/shared/models/setup-config/list-of-supplier';
import { SetupConfigService } from 'src/app/shared/services/setup-config/setup-config.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { element } from 'protractor';

declare const $: any;
@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  limit: number = 15;
  pageIndex: number = 1;
  pageSupplier: number = 0;
  NewListOfSuppliers: Array<[ListOfSupplers]> = [];
  supplierForm: any = {
    page: this.pageSupplier
  }
  supplierPage = 0;

  totalListOfSupplier: number = 0;
  pages: number = 0;


  constructor(
    public ListOfSupplierService: SetupConfigService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchAllListOfSuppliers();
  }

  fetchAllListOfSuppliers() {
    this.ListOfSupplierService.GetAllSuppliers(this.supplierForm)
      .subscribe((res: any) => {
        if (res.status) {
          if (res.result.length != 0) {
            this.totalListOfSupplier = res.totalResult;
            this.supplierPage = res.page;
            this.NewListOfSuppliers = res.result;
          }
          else {
            this.toastr.info(`There is no data available to display`, ``, {
              timeOut: 1000,
              progressBar: false,

              positionClass: 'toast-bottom-right'
            });
          }
        }
        else {
          this.toastr.error(`${res.msg}`, ``, {
            timeOut: 1000,
            progressBar: false,

            positionClass: 'toast-bottom-right'
          });
        }
      });
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('.ui.dropdown').dropdown();
    });
  }

  editSupplier(valObj: any) {
    this.router.navigate(['/setup-configuration/edit-supplier/' + valObj.supplier_id])
  }

  pageCallback(event: any) {
    let offset = event.offset;
    this.supplierForm.page = offset;
    this.fetchAllListOfSuppliers();
  }

}