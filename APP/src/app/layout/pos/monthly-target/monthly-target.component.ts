import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { PosService } from 'src/app/shared/services/pos-service/pos-service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

declare const moment: any;
declare const $: any;
@Component({
  selector: 'app-monthly-target',
  templateUrl: './monthly-target.component.html',
  styleUrls: ['./monthly-target.component.scss']
})
export class MonthlyTargetComponent implements OnInit {

  monthlyTargetForm: FormGroup;
  organisation_ID: any;
  posInfo:any={};
  yearsList = [];
  monthsList = [
    new Month(1, 'January'),
    new Month(2, 'February'),
    new Month(3, 'March'),
    new Month(4, 'April'),
    new Month(5, 'May'),
    new Month(6, 'June'),
    new Month(7, 'July'),
    new Month(8, 'August'),
    new Month(9, 'September'),
    new Month(10, 'October'),
    new Month(11, 'November'),
    new Month(12, 'December')
  ];

  months=[];
  monthSplice=[];
  currentYear = new Date().getFullYear();
  currentMonth = new Date().getMonth() + 1;

  constructor(private fb: FormBuilder,
    private posService: PosService,
    private toastr: ToastrService,
    private activeRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.organisation_ID = this.activeRoute.snapshot.params.id;
    this.getOrganisationInfo(this.organisation_ID);  

    this.monthlyTargetForm = this.fb.group({
      organisation_id: this.organisation_ID,
      monthlyTarget: this.fb.array([
        this.getTargetFormGroup()
      ]),
      tab:['target'],

    })
    for (let y = this.currentYear; y <= (this.currentYear + 5); y++) {
      this.yearsList.push(y);
    }
    
   this.months=this.monthsList;
  }
  ngAfterViewInit() {
    this.makeJQuery();  

  }

  getTargetFormGroup() {
    return this.fb.group({
      year: [''],
      month: [''],
      flight_stats: [null],
      hotel_stats: [null],
      insurance_stats: [null],
      car_stats: [null]
    })
  }

  addItem(): void {
    this.makeJQuery()
    this.getItemArray.push(this.getTargetFormGroup());
  }

  removeItem(index) {
    if (index > 0) this.getItemArray.removeAt(index);
  }

  get getItemArray() {
    return this.monthlyTargetForm.get('monthlyTarget') as FormArray;
  }

  storeMonthlyTarget() {
    this.posService.updatePosDetails(JSON.stringify(this.monthlyTargetForm.value)).subscribe((result: any) => {
      if (result.status) {
        this.toastr.success(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-top-right'
        });
        this.router.navigate(['/pos/basic-edit/'+this.organisation_ID])
      } else {
        this.toastr.error(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-top-right'
        });
      }
    });

  }

  makeJQuery() {
    $('.ui.dropdown').dropdown();
    $(document).ready(function () {
      $('.ui.dropdown').dropdown();
      $('.ui.dropdown').dropdown('refresh');
      $('.ui.checkbox').checkbox();
      $('.ui.dropdownThree').dropdown();
      $('.dropdownyear').dropdown({placeholder:"Year"});
      $('.dropdownMonth').dropdown({placeholder:"Month"});
      

    })
  }

  getOrganisationInfo(organisation_ID:number){
    this.posService.getPosDetails(organisation_ID).subscribe((result: any) => {
      if(result.status)

    this.posInfo = result.result; 
    let organisation_stats=JSON.parse(this.posInfo.organisation_stats)
     this.monthlyTargetForm.patchValue({
      organisation_id: this.organisation_ID
    });

    if(organisation_stats){
      this.getItemArray.removeAt(0);
      organisation_stats.forEach((x) => {
        this.getItemArray.push(this.fb.group(x));
      });
    }else{
      organisation_stats.forEach((x) => {
        this.getItemArray.push(this.fb.group(x))
      });
    }


    this.ngAfterViewInit();
   
  });
  }

  cancelMonthlyTarget(){
    this.router.navigate(['/pos/basic-edit/',this.organisation_ID])
  }

  selectYear(event){
    console.log(event)
  if(event == this.currentYear){
    this.monthSplice=this.monthsList;
    this.months=this.monthSplice.slice(this.currentMonth - 1,12);
  }else{
    this.months=this.monthsList;
  }
  }

}
export class Month {
  constructor(public id: number, public name: string) { }
}