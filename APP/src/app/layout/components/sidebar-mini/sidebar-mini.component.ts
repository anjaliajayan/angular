import { FlatTreeControl } from "@angular/cdk/tree";
import { Component, OnInit } from "@angular/core";
import {
  MatTreeFlatDataSource,
  MatTreeFlattener
} from "@angular/material/tree";

import { MenuItems, MenuFlatNode } from "../../../shared/models/index";
import { MENU_ITEMS } from "../../../shared/utils/menu-items";
import { Router } from '@angular/router';

declare var $: any;


@Component({
  selector: 'app-sidebar-mini',
  templateUrl: './sidebar-mini.component.html',
  styleUrls: ['./sidebar-mini.component.scss']
})
export class SidebarMiniComponent implements OnInit {
  menuArray: MenuItems[] = MENU_ITEMS;
  menuWithPermissionsArray: any = [];

  roleAndPermissions: any = [];

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

  constructor(private router: Router) {
    this.dataSource.data = MENU_ITEMS;
  }

  hasChild = (_: number, node: MenuFlatNode) => node.expandable;

  navigateRoute(event, route) {
    event.stopPropagation();
    this.router.navigateByUrl(route);
    $('.ui.dropdown').dropdown('hide');
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $(".ui.accordion").accordion({
        selector: {}
      });
    });
  }

}
