import { Component, OnInit } from '@angular/core';

import { SetupConfigService } from 'src/app/shared/services/setup-config/setup-config.service';
import { POSService } from 'src/app/shared/services/pointsale.service';
import Swal from 'sweetalert2';
import { MarkupConfiguration } from 'src/app/shared/models/setup-config/markup-configuration';
import { GroupSeasonality } from 'src/app/shared/models/setup-config/group_seasonality';
import { PointOfSale } from 'src/app/shared/models/point-of-sale.interface'
import { ListOfSupplers } from 'src/app/shared/models/setup-config//list-of-supplier';
import { ToastrService } from 'ngx-toastr';

declare const $:any;

@Component({
  selector: 'app-markup-configuration',
  templateUrl: './markup-configuration.component.html',
  styleUrls: ['./markup-configuration.component.scss']
})
export class MarkupConfigurationComponent implements OnInit {
  
  showListForm:boolean=true; 
  showAddGroupForm:boolean=false;
  showListMarkup:boolean=true;
  showAddMarkupForm:boolean=false;

  allPos: Array<PointOfSale> = [];
  allSuppliers: Array <ListOfSupplers> = []
  NewGroupSeasonality: Array<[GroupSeasonality]> = [];
  filteredGroupSeasonality: Array<[GroupSeasonality]> = [];

  editGroupSeasonalityObject: GroupSeasonality ;
  saleIdClicked= '-1';
  offset: number = 0;
  totalCount: number = 0;
  filterParams: any = {
    page: this.offset,
  }

  constructor(
    public MarkupConfigurationService: SetupConfigService,
    public posService: POSService,
    private toastr: ToastrService
    
  ) {
    // this.addMarkupObject.
  }

  ngOnInit() {
    this.fetchAllGroups(this.filterParams);
    // this.fetchAllPOS({});
    this.fetchAllSuppliers({})
    
  }
  
  fetchAllGroups(filterParams: any) {
    this.MarkupConfigurationService.GetAllGroups(filterParams)
      .subscribe((res: any) => {
        if (res.status) {
          this.NewGroupSeasonality = res.result.data;
          this.totalCount = res.result.total;
          this.offset = res.result.page;
        }else{
          this.toastr.error(`${res.message}`, ``, {
            timeOut: 1000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          })
        }
      })
  }

  fetchAllPOS( params ){
    
    this.posService.fetchAllPointofSale(params)
      .subscribe((res: any) => {
        if (res.status) {
          this.allPos = res.result.data;
          // this.addGroupSeasonalityObject.organisation_id = Number(this.allPos[0].organisation_id);   
        }
        else{
          this.toastr.error(`${res.msg}`, `${res.msg}`, {
            timeOut: 1000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          })
        }
      });
  }

  fetchAllSuppliers( params ){
    this.MarkupConfigurationService.GetAllSuppliers(params)
      .subscribe((res: any) => {
        if (res.status) {
          this.allSuppliers = res.result;
          // console.log('all sup ', this.allSuppliers)
        }     else{
          this.toastr.error(`${res.msg}`, `${res.msg}`, {
            timeOut: 1000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          })
        }
      });
  }

  addMarkupingroup(row){
    this.saleIdClicked  = row.sale_id;
    this.showAddMarkupForm = true;
    this.showListMarkup = false;
    $('#tab-2').click();
  }
  ngAfterViewInit() {
    $(document).ready(function () {
      $('.menu .item').tab();
      $('.ui.dropdown').dropdown();
      // $('#tab-2').click();
    });
  }
  pageCallback(event: any) {
    let offset = event.offset;
    this.filterParams.page = offset;
    this.fetchAllGroups(this.filterParams);
  }
}