import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { rbdArrayList } from 'src/app/shared/utils/common';
import { Router, ActivatedRoute } from '@angular/router';
import { PosService } from 'src/app/shared/services/pos-service/pos-service';
import { ToastrService } from 'ngx-toastr';
declare const moment: any;
declare const $: any;
@Component({
  selector: 'app-airline-rbd',
  templateUrl: './airline-rbd.component.html',
  styleUrls: ['./airline-rbd.component.scss']
})
export class AirlineRbdComponent implements OnInit {
  
  airlineRBDForm:FormGroup;
  rbdArrayList: string[] = [];
  organisation_ID:any;
  posInfo:any={};

  constructor( private fb:FormBuilder,
    private activeRoute: ActivatedRoute,
    private posService:PosService,
    private toastr: ToastrService,
    private router: Router,
    ) {}

  ngOnInit() {
    this.airlineRBDForm = this.fb.group({
      organisation_id:[''],
      pos_rbd: this.fb.group({
        economy_rbd: [[]],
        pre_economy_rbd: [[]],
        bussiness_rbd: [[]],
        first_rbd: [[]],
      }),
      tab:['rbd'],
    })

    this.organisation_ID = this.activeRoute.snapshot.params.id;
    this.getOrganisationInfo(this.organisation_ID);  
    this.rbdArrayList = rbdArrayList;

  }

  ngAfterViewInit() {
    
    $(document).ready(function () {
      $('.ui.dropdown').dropdown();
      $('.ui.dropdown').dropdown('refresh');
      $('.ui.checkbox').checkbox();
    })
  }
  getOrganisationInfo(organisation_ID:number){
    this.posService.getPosDetails(organisation_ID).subscribe((result: any) => {
      if(result.status)

      this.posInfo = result.result; 

       this.airlineRBDForm.patchValue({
       organisation_id:this.posInfo.organisation_id,
       pos_rbd:this.getRBDFields(this.posInfo.pos_rbd),

    })
    this.ngAfterViewInit();
   
 });
}

getRBDFields(pos_rbd) {
  if (!pos_rbd)
    return [];
  try {
 
    let rbds = JSON.parse(pos_rbd);
    console.log("rbds???",rbds)
    return {
      economy_rbd: rbds.economy_rbd,
      pre_economy_rbd:rbds.pre_economy_rbd,
      bussiness_rbd:rbds.bussiness_rbd,
      first_rbd:rbds.first_rbd
    }
  } catch (error) {
    console.log('er ', error)
    return {
      economy_rbd: [],
      pre_economy_rbd: [],
      bussiness_rbd: [],
      first_rbd: []
    }
  }
}
saveAirlineRBD (){
  
  this.posService.updatePosDetails(this.airlineRBDForm.value).subscribe((result: any) => {
    if(result.status){
      this.toastr.success(`${result.message}`, ``, {
        timeOut: 1000,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      });
      this.router.navigate(['/pos/basic-edit/'+this.organisation_ID])
     }else{
      this.toastr.error(`${result.message}`, ``, {
        timeOut: 1000,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      });
     }
   
  });

}
cancelRBDPage(){
this.router.navigate(['/pos/basic-edit/',this.organisation_ID])
}


}
