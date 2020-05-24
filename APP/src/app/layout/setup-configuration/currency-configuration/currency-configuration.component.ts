import { Component, OnInit } from '@angular/core';
import { CurrencyConfig } from 'src/app/shared/models/setup-config/currency-config';
import { SetupConfigService } from 'src/app/shared/services/setup-config/setup-config.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-currency-configuration',
  templateUrl: './currency-configuration.component.html',
  styleUrls: ['./currency-configuration.component.scss']
})
export class CurrencyConfigurationComponent implements OnInit {
  limit: number = 15;
  pageIndex: number = 1;
  NewListOfCurrencies: Array<[CurrencyConfig]> = [];
  filteredCurrencyList: Array<[CurrencyConfig]> = [];
  showAddCurrency: boolean = false;
  hideAddCurrecy: boolean = true;
  showUpdate: boolean = false;
  filterPagination:boolean = false;
  totalListOfCurrencies: number = 0;
  pages: number = 0;
  offset: number = 0;
  pageCurrency: number = 0;
  currencyPage = 0;
  currencyConfigForm: any = {
    page: this.pageCurrency
  }
  filterParams: any = {
    title:null,
    keyword:'',
    page: this.offset,
  }
  totalCount: number = 0;
  searchObject: any = { currencyCode: '' };
  currencyForm = this.fb.group({
    converter_id: [''],
    from: ['', [Validators.minLength(3),
    Validators.pattern('[A-Z]*'),
    Validators.maxLength(3)]],
    to: ['', [Validators.minLength(3),
    Validators.pattern('[A-Z]*'),
    Validators.maxLength(3)]],
    value: ['']
  })

  constructor(
    private fb: FormBuilder,
    public currencyService: SetupConfigService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    console.log("--------",this.currencyForm.value)
    this.fetchAllListOfCurrencies();
  }

  addCurrency() {
    this.showAddCurrency = true;
    this.hideAddCurrecy = false;
    this.showUpdate = false;
    this.resetForm();
  }

  cancelCurrency() {
    this.showAddCurrency = false;
    this.hideAddCurrecy = true;
  }

  saveCurrency() {
    if (this.currencyForm.invalid) {
      return;
    }

    this.currencyService.addCurrency(this.currencyForm.value).subscribe((result: any) => {
      console.log(result.msg)
      if (result.type == 'error') {
        this.toastr.error(`${result.msg}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      } else {
        if(result.msg =="Record already exists."){
          this.toastr.warning(`${result.msg}`, ``, {
            timeOut: 1000,
            progressBar: false,
  
            positionClass: 'toast-bottom-right'
          });
        }else{
          this.toastr.success(`${result.msg}`, ``, {
            timeOut: 1000,
            progressBar: false,
  
            positionClass: 'toast-bottom-right'
          });
        }
        this.showAddCurrency = false;
        this.hideAddCurrecy = true;
        this.fetchAllListOfCurrencies();
        this.resetForm();
      }
    })
  }

  fetchAllListOfCurrencies() {
    this.currencyService.GetAllCurrencies(this.currencyConfigForm)
      .subscribe((res: any) => {
        if (res.status == 200) {
          this.totalListOfCurrencies = res.totalResult;
          this.currencyPage = res.page;
          res.data.map((ele) => {
            ele.converter = Object.values(JSON.parse(ele.currency));
          })
          this.NewListOfCurrencies = res.data;
          console.log("ggggggg1:::",this.NewListOfCurrencies)
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

  editCurrency(valObj: any) {
    this.showAddCurrency = true;
    this.hideAddCurrecy = false;
    this.showUpdate = true;
    this.currencyForm.patchValue({
      converter_id: valObj.converter_id,
      from: valObj.converter[0].from,
      to: valObj.converter[0].to,
      value: valObj.converter[0].value
    });
  }

  updateCurrency() {
    if (this.currencyForm.invalid) {
      return;
    }
    let converter_id = this.currencyForm.value.converter_id;
    this.currencyService.getUpdateCurrency(converter_id, this.currencyForm.value).subscribe((result: any) => {
      if (result.type == 'error') {
        this.toastr.error(`${result.msg}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      } else {
        if(result.msg =="Record already exists."){
          this.toastr.warning(`${result.msg}`, ``, {
            timeOut: 1000,
            progressBar: false,
  
            positionClass: 'toast-bottom-right'
          });
        }else{
          this.toastr.success(`${result.msg}`, ``, {
            timeOut: 1000,
            progressBar: false,
  
            positionClass: 'toast-bottom-right'
          });
        }
      }
      this.showAddCurrency = false;
      this.hideAddCurrecy = true;
      this.fetchAllListOfCurrencies();
      this.resetForm();
    });
  }

  deleteCurrecy(valObj: any) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.currencyService.deleteCurrency(valObj.converter_id).subscribe((result: any) => {
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
            this.fetchAllListOfCurrencies();
          }
        })
      }
    })
  }


  get from() {
    return this.currencyForm.get('from');
  }
  get to() {
    return this.currencyForm.get('to');
  }
  searchByCurrencyCode(){
    // this.filterPagination = true;
    var search = this.searchObject;
    this.filterParams.keyword = search.currencyCode
    this.currencyService.searchByCurrencyData({"keywords":this.filterParams.keyword })
      .subscribe((res: any) => {
        if (res.status) {
          res.data.map((ele) => {
            ele.converter = Object.values(JSON.parse(ele.currency));
          })
          this.NewListOfCurrencies = res.data;
          console.log("ggggggg:::",this.NewListOfCurrencies)
          // this.totalCount = res.result.total;
          // this.offset = res.result.page;
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
  resetForm() {
    this.currencyForm.reset();
  }
  resetSearch(){
    this.fetchAllListOfCurrencies();
  }
  pageCallback(event: any) {
    let offset = event.offset;
    this.currencyConfigForm.page = offset;
    this.fetchAllListOfCurrencies();
  }

}
