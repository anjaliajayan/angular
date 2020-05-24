import { Component, OnInit, Input, OnChanges } from '@angular/core';
import Swal from 'sweetalert2';

import { SetupConfigService } from 'src/app/shared/services/setup-config/setup-config.service';
import { MarkupConfiguration } from 'src/app/shared/models/setup-config/markup-configuration';
import { GroupSeasonality } from 'src/app/shared/models/setup-config/group_seasonality';
import { ListOfSupplers } from 'src/app/shared/models/setup-config//list-of-supplier';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ToastrService } from 'ngx-toastr';

declare const $: any;

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.scss']
})
export class MarkComponent implements OnInit, OnChanges {

  groupId: number;

  markupsList: Array<[MarkupConfiguration]> = [];
  filteredMarkupsList: Array<[MarkupConfiguration]> = [];
  @Input() sale_id: number;
  @Input() allGroups: Array<GroupSeasonality>;
  @Input() allSuppliers: Array<ListOfSupplers>;
  @Input() showListMarkup: boolean = true;
  @Input() showAddMarkupForm: boolean = false;
  filteredSuppliers: Array<ListOfSupplers> = [];
  errMsg = '';
  searchObject: any = { markupname: '' };
  flag:any;
  flagEdit:any;
  // for mat-chips
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  markupRow = [];
  groups = [];
  suppliersList: [];
  toggleObj: any = {} 
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  offset: number = 0;
  totalCount: number = 0;
  filterParams: any = {
    title:null,
    page: this.offset,
  }
  filterGroup: any = {
    limit:1500,
  }
  // for mat-chips

  filterPagination:boolean = false;

  constructor(
    public MarkupConfigurationService: SetupConfigService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    this.fetchAllMarkups(this.filterParams);
    this.fetchAllSuppliers({});
    this.fetchAllGroups(this.filterGroup)
  }

  fetchAllSuppliers(params) {
    this.MarkupConfigurationService.FetchAllSuppliers(params)
      .subscribe((res: any) => {
        if (res.status) {
          this.allSuppliers = res.result;
          this.filteredSuppliers = this.allSuppliers;
        }
      }, err => {
        console.log('erer ', err)
      });
  }
  // Functions for watching if anychange comes for @Input  
  ngOnChanges(changes) {
    var keys = Object.keys(changes);
    if (keys.indexOf('sale_id') >= 0) {
    }
  }

  searchChange() {
    this.filterPagination = true;
    var search = this.searchObject;
    this.filterParams.title = search.markupname
    this.MarkupConfigurationService.searchMarkupByName(this.filterParams)
      .subscribe((res: any) => {
        if (res.status) {
          this.filteredMarkupsList = res.result.data;
   
          this.totalCount = res.result.total;
          this.offset = res.result.page;
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

  editMark(groupVal) {
    this.makeJqueryFields();
    this.markupRow = groupVal;
    this.flag=false;
    this.flagEdit=true;
    this.showAddMarkupForm = true;
    this.showListMarkup = false;
    this.fetchAllGroups(this.filterGroup);

  }

  fetchAllGroups(filterGroup: any) {
    this.MarkupConfigurationService.GetAllGroups(this.filterGroup)
      .subscribe((res: any) => {
        if (res.status) {
          var myArray = res.result.data.filter(function( obj ) { 
            return obj.status !=1;
        });
       this.allGroups =myArray;
       this.groups = this.allGroups;
        }
      }, err => {
        console.log('erer ', err)
      });
  }

  deleteMark(markup) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.MarkupConfigurationService.deleteMarkup(markup.markup_id)
          .subscribe((res: any) => {
            if (res.status) {
              this.toastr.success(`${res.message}`, ``, {
                timeOut: 1000,
                progressBar: false,

                positionClass: 'toast-bottom-right'
              })
              this.fetchAllMarkups(this.filterParams);
              // this.searchChange(this.filterParams)
            } else {
              this.toastr.error(`${res.message}`, ``, {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              })
            }
          });
      }
    })


  }

  fetchAllMarkups(filterParams: any) {
    this.MarkupConfigurationService.GetAllMarkups(filterParams)
      .subscribe((res: any) => {
        
        if (res.status) {
          this.markupsList = res.result.data;
          this.filteredMarkupsList = res.result.data;
          this.totalCount = res.result.total;
          this.offset = res.result.page;
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

  onClickAddNewMarkup = (params) => {

    this.flag=params;
    this.flagEdit=false;
    this.showAddMarkupForm = true;
    this.showListMarkup = false;
    this.makeJqueryFields()
    this.fetchAllGroups(this.filterGroup)

  }

  onClickListMarkup = () => {
    this.flag=false;
    this.flagEdit=false;
    this.showListMarkup = true;
    this.showAddMarkupForm = false;
  }

  ngAfterViewInit() {
    // $('.ui.dropdown').dropdown({
    //   allowAdditions: true,
    // });
  }

  makeJqueryFields() {
    var scope = this;

    $(document).ready(function () {
      // console.log('btns added')
      $('.dropdown-supplier').dropdown({ placeholder: 'Select Supplier' });
      $('.dropdown-group').dropdown({ placeholder: 'Select Group' });
      $('.tagsinput').dropdown({ placeholder: 'Select Origin Airport' })
    })
  }
  eventFromChild(data) {
    this.showAddMarkupForm = false;
    this.showListMarkup = true;
    this.fetchAllMarkups(this.filterParams);

  }

  resetFilter() {
    this.searchObject.markupname="";
    this.filterParams= {
      title:null,
      page: this.offset,
    }
    this.fetchAllMarkups(this.filterParams);
    this.fetchAllGroups(this.filterGroup);
  }

  statusToggle(data:any){
  this.toggleObj.id=data.markup_id;
  this.toggleObj.status=data.is_active;
  this.toggleObj.table="markup";
  this.MarkupConfigurationService.onStatusToggle(this.toggleObj)
  .subscribe((res: any) => {
    if (res.status == 200) {
      this.fetchAllMarkups(this.filterParams);
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

  pageCallback(event: any) {
    let offset = event.offset;
    this.filterParams.page = offset;
    this.filterPagination ? this.searchChange() : this.fetchAllMarkups(this.filterParams)
  }



}
