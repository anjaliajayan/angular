import { FlatTreeControl } from "@angular/cdk/tree";
import { Component, OnInit } from "@angular/core";
import {
  MatTreeFlatDataSource,
  MatTreeFlattener
} from "@angular/material/tree";

import { MenuItems, MenuFlatNode } from "../../../shared/models/index";
import { MENU_ITEMS } from "../../../shared/utils/menu-items";

import { UserService } from '../../../shared/services/user.services';
import { HttpErrorResponse } from '@angular/common/http';

declare var $: any;

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {

  menuArray: MenuItems[] = MENU_ITEMS;
  menuWithPermissionsArray: any = [];
  roleAndPermissions: any = [];

  userPermissions: any = [];
  titleClicked: boolean = false;
  heightSideBar ;

  private _transformer = (node: MenuItems, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      icon: node.icon,
      route: node.route,
      level: level
    };
  };

  treeControl = new FlatTreeControl<MenuFlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private userService: UserService) {
    this.dataSource.data = MENU_ITEMS;
  }

  hasChild = (_: number, node: MenuFlatNode) => node.expandable;

  ngOnInit() {

    // this.roleAndPermissions = JSON.parse(localStorage.getItem(PERMISSIONS));

    /*
    this.userService.getPermissions().subscribe(_r => {

      if (_r.status == 200 && _r.type == 'data') {

        const pd = JSON.parse(JSON.parse(_r.data));

        let perms = [];
        pd.map(p => {

          if (p.dashboard && !!+p.dashboard.allowed)
            perms.push(p.dashboard);

          if (p.search && !!+p.search.allowed)
            perms.push(p.search);

          if (p.booking && !!+p.booking.allowed)
            perms.push(p.booking);

          if (p.pos && !!+p.pos.allowed)
            perms.push(p.pos);

          if (p.user && !!+p.user.allowed)
            perms.push(p.user);

          if (p.setting && !!+p.setting.allowed)
            perms.push(p.setting);

          if (p.account && !!+p.account.allowed)
            perms.push(p.account);

          if (p.profile && !!+p.profile.allowed)
            perms.push(p.profile);

          if (p.reports && !!+p.reports.allowed)
            perms.push(p.reports);

          if (p.help && !!+p.help.allowed)
            perms.push(p.help);

        })

        console.log('***************************')
        console.log(perms);
        this.userPermissions = perms;
        // this.userPermissions = pd;

      }
      else {
        // alert(_r.message);
      }
    }, (apiError: HttpErrorResponse) => {
      // alert(apiError.error.message);
      // swal('Error!', apiError.error.message, 'error');
    });
    */

    this.heightSideBar = localStorage.getItem("height");
  }

  // ngOnChanges(){
  //   console.log(localStorage.getItem("height"))
  // }

  checkExtraConditions(obj: any) {
    if (obj.scenario) {
      if (obj.scenario === 'airshopping') {
        //localStorage.removeItem(BOOKING_INFO);
      }
    }
  }

  ngAfterViewInit() {
    this.initAccordion();

    $('.ui.accordion .title').click(function() {
      $('.title').removeClass('active');
      $('.content').removeClass('active');
      $(this).toggleClass('active');
    })
    this.sideBarScroll();
  }

  initAccordion() {
    $(document).ready(function () {
      $(".ui.accordion").accordion({
        selector: {}
      });
    });
  }

  sideBarScroll() {
    $(".sidebar-content-wrap").css("max-height", this.heightSideBar - ($(".white-section").height()+$(".poweredBy").height()));
  }

  onResize(event) {
    this.heightSideBar = localStorage.getItem("height");
    $(".sidebar-content-wrap").css("max-height", this.heightSideBar - ($(".white-section").height()+$(".poweredBy").height()));
  }

}
