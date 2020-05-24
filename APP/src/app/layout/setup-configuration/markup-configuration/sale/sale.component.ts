import { Component, OnInit } from '@angular/core';
import { SetupConfigService } from 'src/app/shared/services/setup-config/setup-config.service';
import { GroupSeasonality } from 'src/app/shared/models/setup-config/group_seasonality';
import Swal from 'sweetalert2';
import { PointOfSale } from 'src/app/shared/models/point-of-sale.interface'
import { POSService } from 'src/app/shared/services/pointsale.service';
import { ToastrService } from 'ngx-toastr';


declare const $: any;

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {


  errMsg = ''
  showListForm: boolean = true;
  showAddGroupForm: boolean = false;
  allPos: Array<PointOfSale> = [];
  NewGroupSeasonality: Array<[GroupSeasonality]> = [];
  FilteredGroups: Array<[GroupSeasonality]> = [];
  FilteredGroupsArr: Array<[GroupSeasonality]> = [];
  searchObject: any = {
    groupname: ''
  }
  toggleObj: any = {} 
  searchObject1 = {};
  groupRow = [];
  flag:any;
  flgEdit:any;
  offset: number = 0;
  totalCount: number = 0;
  filterParams: any = {
    name:null,
    page: this.offset,
  }
  filterPagination:boolean = false;

  constructor(
    public MarkupConfigurationService: SetupConfigService,
    public posService: POSService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.fetchAllGroups(this.filterParams);
    // this.fetchAllPOS({});
  }

  searchChange() {
    this.filterPagination = true;
    var search = this.searchObject;
    this.filterParams.name = search.groupname
    this.MarkupConfigurationService.searchGroupByName(this.filterParams)
    .subscribe((res: any) => {
      if (res.status) {
        var myArray = res.result.data.filter(function( obj ) { 
          return obj.status !=1;
      });
      this.FilteredGroups=myArray;
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


  editGroup(group) {
    this.makeJqueryFields();
    this.groupRow = group;
    this.flgEdit=false;
    this.showListForm = false;
    this.showAddGroupForm = true;
  }

  deleteGroup(group) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {

      if (result.value) {
        this.MarkupConfigurationService.deleteGroup(group.sale_id).subscribe((result: any) => {
          if (result.type == 'error') {
            this.toastr.error(`${result.message}`, ``, {
              timeOut: 1000,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
          } else {
            this.toastr.success(`${result.message}`, ``, {
              timeOut: 1000,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
            this.fetchAllGroups(this.filterParams);;
          }
        })
      }

    })
  }

  mapOrganisationIds(organisation_id) {
    var pos = this.allPos;
    var output = []
    try {
      if (organisation_id) {
        var org_Arr = organisation_id.split(',')
        for (let ii = 0; ii < org_Arr.length; ii++) {
          const org_obj = org_Arr[ii];
          if (org_obj && org_obj != '') {
            var tmpres = pos.filter(obj => obj.organisation_id == org_obj);
            if (tmpres.length > 0) {
              output.push(String(tmpres[0].organisation_id))
            }
          }
        }
        return output;
      }
      return []
    } catch (error) {
      console.log('er ', error)
      return []
    }
  }

  fetchAllGroups(filterParams: any) {
    this.MarkupConfigurationService.GetAllGroups(filterParams).subscribe((res: any) => {
      if (res.status) {
        var myArray = res.result.data.filter(function (obj) {
          return obj.status != 1;
        });
        this.FilteredGroups = myArray;
        this.totalCount = res.result.total;
        this.offset = res.result.page;
      } else {
        this.toastr.error(`${res.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-top-right'
        })
      }
      });
  }

  onClickAddNewGroup = (val) => {
    this.flag=val;
    this.flgEdit=false;
    this.showListForm = false;
    this.showAddGroupForm = true;
    this.makeJqueryFields();
  }

  onClickListGroup = () => {
    this.showListForm = true;
    this.showAddGroupForm = false;
    this.flag=false;
    this.flgEdit=false;
  }
  onItemSelect(event) {
    console.log(event)
  }

  onSelectAll(event) {
    console.log(event)
  }

  ngAfterViewInit() {
    let THIS = this;
    THIS.makeJqueryFields()
  }

  makeJqueryFields() {
    $(document).ready(function () {
      $('.ui .dropdown').dropdown();
      $('.dropdown').dropdown({ placeholder: 'Select POS' });
    })
  }
  resetFilter(){
    this.searchObject.groupname="";
    this.fetchAllGroups(this.filterParams);
  }
  eventFromChild(data) {
    this.showListForm = true;
    this.showAddGroupForm = false;
    this.fetchAllGroups(this.filterParams);
  }

  statusToggle(data:any){
  this.toggleObj.id=data.sale_id;
  this.toggleObj.status=data.is_active;
  this.toggleObj.table="sale";
  this.MarkupConfigurationService.onStatusToggle(this.toggleObj)
  .subscribe((res: any) => {
    if (res.status) {
      this.fetchAllGroups(this.filterParams);;
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

  pageCallback(event: any) {
    let offset = event.offset;
    this.filterParams.page = offset;
    this.filterPagination ? this.searchChange() : this.fetchAllGroups(this.filterParams)
  }

}
