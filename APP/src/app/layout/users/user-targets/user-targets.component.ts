import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-user-targets',
  templateUrl: './user-targets.component.html',
  styleUrls: ['./user-targets.component.scss']
})
export class UserTargetsComponent implements OnInit {

  userTargetForm: FormGroup;
  months=[];
  monthSplice=[];
  userId: Number = 0;
  targets: FormArray;
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

  currentYear = new Date().getFullYear();
  currentMonth = new Date().getMonth() + 1;

  constructor(private _fb: FormBuilder, 
    private userService: UserService, 
    private toastr: ToastrService,
     private activatedRoute: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params.id;
    this.getUser(this.userId);

    this.userTargetForm = this._fb.group({
      targets: this._fb.array([this.createUserTargetForm()])
    })

    for (let y = this.currentYear; y <= (this.currentYear + 5); y++) {
      this.yearsList.push(y);
    }
    this.months=this.monthsList;
  }

  
  get getTargetArray() {
    return this.userTargetForm.get('targets') as FormArray;
  }

  getUser(userId) {
  
    this.userService.fetchUser(userId).subscribe(r => {
      if (r.status == 200) {
        let target_amount=JSON.parse(r.data.target_amount)
        if(target_amount){
          this.getTargetArray.removeAt(0);
          target_amount.forEach((x) => {
            this.getTargetArray.push(this._fb.group(x));
          });
        }else{
          target_amount.forEach((x) => {
            this.getTargetArray.push(this._fb.group(x))
          });
        }
        
      }
      else {
        this.buildError(r.msg)
      }
    }, (apiError: HttpErrorResponse) => {
      this.buildError(apiError.error.message)
    });
  }

  btnSubmitHandler() {
    const targets = JSON.stringify({
      user_id: this.activatedRoute.snapshot.params.id,
      targets: this.userTargetForm.value.targets
    });

    this.userService.saveTargets(targets).subscribe( r => {
      if( r.status ) {
        this.toastr.success(r.message, 'Success !', {
          disableTimeOut: false,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });

        this.router.navigate(['/users'])}
      else {
        this.buildError(r.msg)
      }
    }, (apiError: HttpErrorResponse) => {
      this.buildError(apiError.error.message)
    });

    console.log(targets);
    return false;
  }

  createUserTargetForm(): FormGroup {
    return this._fb.group({
      year: ['', Validators.required],
      month: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  btnAddTarget(): void {
    this.getTargetArray.push(this.createUserTargetForm());
  }

  btnRemoveTarget(index){
    if (index > 0) this.getTargetArray.removeAt(index);
  }
  get gfc() { return this.userTargetForm.controls };

  buildError(message) {
    this.toastr.error(message, 'Server Error !', {
      disableTimeOut: false,
      progressBar: false,
      positionClass: 'toast-bottom-right'
    });
  }
  
  selectYear(event){
    if(event == this.currentYear){
      this.monthSplice=this.monthsList;
      this.months=this.monthSplice.slice(this.currentMonth - 1,12);
    }else{
      this.months=this.monthsList;
    }
    }

    cancel(){
      this.router.navigateByUrl('users');
    }
}


export class Month {
  constructor(public id: number, public name: string) { }
}