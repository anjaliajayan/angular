import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { UserRoleService } from 'src/app/shared/services/user-role.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as CanvasJS from 'src/assets/vendor/canvasjs/canvasjs.min.js';
declare const $: any;

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  userInfo: any = {};
  activeProducts: any = {};
  targetAmountArray: any = [];
  filterForm: FormGroup;
  filterTypes = [
    { id: 1, name: 'Day' },
    { id: 6, name: 'Week' },
    { id: 30, name: 'Month' },
    { id: 365, name: 'Year' }
  ];

  constructor(private fb: FormBuilder, private userRoleService: UserRoleService, private activeRoute: ActivatedRoute, private router: Router, private toastr: ToastrService, private commonService: CommonService) {
    this.filterForm = this.fb.group({
      filterDays: ['1'],//new FormArray([]),
      product_id: [''],
      users_id: ['']
    })
  }

  ngOnInit() {
    // get user id
    this.getSettings();
    let userId = this.activeRoute.snapshot.params.id;
    this.filterForm.patchValue({ users_id: userId });
    this.getUserInfo(userId);
    this.filterData();

    let barChart = new CanvasJS.Chart("barChart", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Bar Report",
        horizontalAlign: "left"
      },

      data: [{
        type: "doughnut",
        startAngle: 60,
        innerRadius: 60,
        indexLabelFontSize: 17,
        indexLabel: "{label} - #percent%",
        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        dataPoints: [
          { y: 34, label: "hotel" },
          { y: 3, label: "flight" },
          { y: 7, label: "activities" },
          { y: 45, label: "car" },
          { y: 7, label: "transfers" },
          { y: 6, label: "insurance" },
          { y: 23, label: "visa" },
          { y: 3, label: "cruise" }
        ]
      }]
    });

    barChart.render();
  }

  getSettings() {
    let permArr = { "name": ['ActiveProducts'] };
    this.commonService.getSettingList(permArr).subscribe((result: any) => {
      let activeProductsData = JSON.parse(result.listData.find(list => list.name == 'ActiveProducts').value);
      let keyValue = Object.entries(activeProductsData).map(([key, value]) => ({ key, value }));
      this.activeProducts = keyValue.filter(o => Object.keys(o).some(k => o.value == 1))
      console.log("--this.activeProducts", this.activeProducts)
    })
  }

  // ActiveProducts
  // get current logedin user info and update profile
  getUserInfo(userId) {
    this.userRoleService.getUser(userId).subscribe((result: any) => {
      if (result.type != 'error') {
        this.userInfo = result.data;
        console.log("---this.userInfo-----", this.userInfo);

        this.targetAmountArray = JSON.parse(this.userInfo.target_amount);
        console.log("---targetAmountArray", this.targetAmountArray)

      } else {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 10000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['user-role-management/list-user'])
      }
    })

  }

  filterData() {
    this.userRoleService.getBookings(this.filterForm.value).subscribe((result: any) => {
      console.log("result", result.data);
      if (result.type == 'data') {
        this.renderPieChar(result.data);
      }
    })
  }

  renderPieChar = (dataInfo) => {
    let pieChart = new CanvasJS.Chart("pieChart", {
      animationEnabled: true,
      exportEnabled: true,
      title: '',
      data: [{
        type: "doughnut",
        startAngle: 60,
        innerRadius: 60,
        indexLabelFontSize: 17,
        indexLabel: "{label} - #percent%",
        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        dataPoints: dataInfo
      }]
    });

    pieChart.render();
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('.ui.dropdown').dropdown();
      $('.test.checkbox').checkbox('attach events', '.toggle.button');


    });
  }

}
