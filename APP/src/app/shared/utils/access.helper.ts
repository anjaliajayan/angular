//get user permissions and set array of permisssions
import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";

import { UserRoleService } from '../services/user-role.service';


@Directive({
  selector: "[appCanAccess]"
})
export class CanAccessDirective implements OnInit {
  @Input("appCanAccess") appCanAccess: string | string[];
  data: any;
  observableData: any;
  //
  // private currentPermissions = JSON.parse(localStorage.getItem(PERMISSIONS));
  private permArr: any = [];
  private currenOrg = {
    "dashboard": {
      "display": "Dashboard",
      "allowed": 1,
      "accessType": [
        { "allowed": 1, "display": "Search", "name": "search" },
        { "allowed": 1, "display": "Booking Info", "name": "bookingInfo" },
        { "allowed": 1, "display": "Revenue", "name": "revenue" },
        { "allowed": 1, "display": "Margin", "name": "margin" }
      ]
    },
    "search": {
      "display": "Search",
      "allowed": 1,
      "accessType": [
        {
          "allowed": 1,
          "display": "Flights",
          "name": "flight",
          "accessType": [
            { "allowed": 1, "display": "List", "name": "list" },
            { "allowed": 1, "display": "Add", "name": "add" },
            { "allowed": 1, "display": "Edit", "name": "edit" },
            { "allowed": 1, "display": "Export", "name": "export" }
          ]
        }]
    },
    "booking": {
      "display": "Book",
      "allowed": 1,
      "accessType": [
        { "allowed": 1, "display": "Export", "name": "export" },
        { "allowed": 1, "display": "View Deails", "name": "view" },
        { "allowed": 1, "display": "Cancel", "name": "cancel" },
        { "allowed": 1, "display": "Void", "name": "void" },
        { "allowed": 1, "display": "Amend", "name": "amend" },
        { "allowed": 1, "display": "Reshop", "name": "reshop" },
        { "allowed": 1, "display": "Re Issue", "name": "reissue" },
        { "allowed": 1, "display": "Book Ticket", "name": "issueTicket" },
        { "allowed": 1, "display": "Voucher", "name": "voucher" },
        { "allowed": 1, "display": "Print Invoice without price", "name": "printWithoutPrice" },
        { "allowed": 1, "display": "Print Invoice", "name": "printBill" },
      ]
    },
    "pos": {
      "display": "Point of Sale",
      "allowed": 1,
      "accessType": [
        { "allowed": 1, "display": "List", "name": "list" },
        { "allowed": 1, "display": "Add", "name": "add" },
        { "allowed": 1, "display": "Edit", "name": "edit" },
        { "allowed": 1, "display": "Export", "name": "export" },
        { "allowed": 1, "display": "Delete", "name": "delete" }
      ]
    },
    "user": {
      "display": "User Role Management",
      "allowed": 1,
      "accessType": [
        { "allowed": 1, "display": "List", "name": "list" },
        { "allowed": 1, "display": "Add", "name": "add" },
        { "allowed": 1, "display": "Edit", "name": "edit" },
        { "allowed": 1, "display": "Update self profile", "name": "updateProfile" },
        { "allowed": 1, "display": "Export", "name": "export" },
        { "allowed": 1, "display": "Delete", "name": "delete" }
      ]
    },
    "setting": {
      "display": "Setup & Configuration",
      "allowed": 1,
      "accessType": [
        {
          "allowed": 1,
          "display": "Markup Configuration",
          "name": "markup",
          "accessType": [
            { "allowed": 1, "display": "List", "name": "list" },
            { "allowed": 1, "display": "Add", "name": "add" },
            { "allowed": 1, "display": "Edit", "name": "edit" },
            { "allowed": 1, "display": "Delete", "name": "delete" }
          ]
        },
        {
          "allowed": 1,
          "display": "Roles",
          "name": "role",
          "accessType": [
            { "allowed": 1, "display": "List", "name": "list" },
            { "allowed": 1, "display": "Add", "name": "add" },
            { "allowed": 1, "display": "Edit", "name": "edit" },
            { "allowed": 1, "display": "Delete", "name": "delete" }
          ]
        },
        {
          "display": "Tour Code",
          "allowed": 1,
          "name": "tourcode",
          "accessType": [
            { "allowed": 1, "display": "List", "name": "list" },
            { "allowed": 1, "display": "Add", "name": "add" },
            { "allowed": 1, "display": "Edit", "name": "edit" },
            { "allowed": 1, "display": "Delete", "name": "delete" }
          ]
        },
        {
          "name": "commissions",
          "display": "Comissions",
          "allowed": 1,
          "accessType": [
            { "allowed": 1, "display": "List", "name": "list" },
            { "allowed": 1, "display": "Add", "name": "add" },
            { "allowed": 1, "display": "Edit", "name": "edit" },
            { "allowed": 1, "display": "Delete", "name": "delete" }
          ]
        },
        {
          "allowed": 1,
          "display": "Supplier",
          "name": "supplier",
          "accessType": [
            { "allowed": 1, "display": "List", "name": "list" },
            { "allowed": 1, "display": "Add", "name": "add" },
            { "allowed": 1, "display": "Edit", "name": "edit" },
            { "allowed": 1, "display": "Delete", "name": "delete" }
          ]
        },
        {
          "allowed": 1,
          "display": "Currency Configuration",
          "name": "currencyConfig",
          "accessType": [
            { "allowed": 1, "display": "List", "name": "list" },
            { "allowed": 1, "display": "Add", "name": "add" },
            { "allowed": 1, "display": "Edit", "name": "edit" },
            { "allowed": 1, "display": "Delete", "name": "delete" }
          ]
        },
        {
          "allowed": 1,
          "display": "Email Templates",
          "name": "emailTemplate",
          "accessType": [
            { "allowed": 1, "display": "List", "name": "list" },
            { "allowed": 1, "display": "Add", "name": "add" },
            { "allowed": 1, "display": "Edit", "name": "edit" },
            { "allowed": 1, "display": "Delete", "name": "delete" }
          ]
        }
      ]
    },
    "account": {
      "display": "Accounts",
      "allowed": 1,
      "accessType": [
        {
          "allowed": 1,
          "display": "Transactions",
          "name": "transaction",
          "accessType": [
            { "allowed": 1, "display": "List", "name": "list" },
            { "allowed": 1, "display": "Add", "name": "add" },
            { "allowed": 1, "display": "Edit", "name": "edit" },
            { "allowed": 1, "display": "Delete", "name": "delete" }
          ]
        },
        {
          "allowed": 1,
          "display": "Topup",
          "name": "topup",
          "accessType": [
            { "allowed": 1, "display": "List", "name": "list" },
            { "allowed": 1, "display": "Add", "name": "add" },
            { "allowed": 0, "display": "Edit", "name": "edit" },
            { "allowed": 1, "display": "Delete", "name": "delete" }
          ]
        },
        {
          "allowed": 1,
          "display": "Floating Deposit",
          "name": "floating",
          "accessType": [
            { "allowed": 1, "display": "List", "name": "list" },
            { "allowed": 1, "display": "Add", "name": "add" },
            { "allowed": 0, "display": "Edit", "name": "edit" },
            { "allowed": 1, "display": "Delete", "name": "delete" }
          ]
        }
      ]
    },
    "profile": {
      "display": "Profile Management",
      "allowed": 1,
      "accessType": [
        {
          "allowed": 1,
          "display": "Traveller Profile",
          "name": "travellerProf",
          "accessType": [
            { "allowed": 1, "display": "List", "name": "list" },
            { "allowed": 1, "display": "Add", "name": "add" },
            { "allowed": 1, "display": "Edit", "name": "edit" },
            { "allowed": 1, "display": "Delete", "name": "delete" }
          ]
        },
        {
          "allowed": 1,
          "display": "Group Profile",
          "name": "groupProf",
          "accessType": [
            { "allowed": 1, "display": "List", "name": "list" },
            { "allowed": 1, "display": "Add", "name": "add" },
            { "allowed": 1, "display": "Edit", "name": "edit" },
            { "allowed": 1, "display": "Delete", "name": "delete" }
          ]
        },
        {
          "allowed": 1,
          "display": "Agency Profile",
          "name": "agencyProf",
          "accessType": [
            { "allowed": 1, "display": "List", "name": "list" },
            { "allowed": 1, "display": "Add", "name": "add" },
            { "allowed": 1, "display": "Edit", "name": "edit" },
            { "allowed": 1, "display": "Delete", "name": "delete" }
          ]
        },
        {
          "allowed": 1,
          "display": "Company Profile",
          "name": "companyProf",
          "accessType": [
            { "allowed": 1, "display": "List", "name": "list" },
            { "allowed": 1, "display": "Add", "name": "add" },
            { "allowed": 1, "display": "Edit", "name": "edit" },
            { "allowed": 1, "display": "Delete", "name": "delete" }
          ]
        }
      ]
    },
    "reports": {
      "display": "Reports",
      "allowed": 1,
      "accessType": [
        {
          "allowed": 1,
          "display": "Booking",
          "name": "bookingRep",
          "accessType": [
            { "allowed": 1, "display": "Export Reports", "name": "export" }
          ]
        },
        {
          "allowed": 1,
          "display": "Segment",
          "name": "segment",
          "accessType": [
            { "allowed": 1, "display": "Export Reports", "name": "export" }
          ]
        },
        {
          "allowed": 1,
          "display": "MIS",
          "name": "mis",
          "accessType": [
            { "allowed": 1, "display": "Export Reports", "name": "export" }
          ]
        },
        {
          "allowed": 1,
          "display": "Search Log",
          "name": "searchLog",
          "accessType": [
            { "allowed": 1, "display": "Export Reports", "name": "export" }
          ]
        },
        {
          "allowed": 1,
          "display": "Audit Trail Log",
          "name": "auditTrial",
          "accessType": [
            { "allowed": 1, "display": "Export Reports", "name": "export" }
          ]
        },
        {
          "allowed": 1,
          "display": "Ticket",
          "name": "ticket",
          "accessType": [
            { "allowed": 1, "display": "Export Reports", "name": "export" }
          ]
        },
        {
          "allowed": 1,
          "display": "Dynamic Report",
          "name": "dynamicReport",
          "accessType": [
            { "allowed": 1, "display": "Export Reports", "name": "export" }
          ]
        }
      ]
    },
    "help": {
      "display": "Help",
      "allowed": 1
    }
  };

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userRoleService: UserRoleService
  ) { }

  ngOnInit(): void {
    
    this.getPermissions();
  }

  private getPermissions(){
    this.userRoleService.getNewRolePermissions().subscribe((response:any) =>{
      console.log("---result", response);
      this.currenOrg = response.myRole; 
      this.applyPermission();
    })
  }

  private returnIfExists(menu, subMenu, action) {
    let obj = this.currenOrg[menu];
    var subMenuIndex = obj.accessType.findIndex(el => el.name === subMenu);
    if (subMenuIndex != -1) {
      if (obj.accessType[subMenuIndex].allowed) {
        if (!action) {
          return true;
        }
        var childIndex = obj.accessType[subMenuIndex].accessType.findIndex(el => el.name === action);
        if (childIndex != -1) {
          if (obj.accessType[childIndex].accessType[childIndex].allowed) {
            return true;
          }
        }
      }
    }
    return false;
  }

  private applyPermission(): void {
    let menu = this.appCanAccess[0];
    let subMenu = this.appCanAccess[1];
    let action = this.appCanAccess[2];
    console.log("this.currenOrg[menu]",this.currenOrg[menu])
    if (this.currenOrg[menu] != undefined) {
      if (!this.currenOrg[menu].allowed) {
        this.viewContainer.clear();
      } else {
        if (!subMenu && action) {
          var checkKey = this.currenOrg[menu].accessType.findIndex(el => el.name === action);
          if (checkKey != -1) {
            this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
            this.viewContainer.clear();
          }
        } else if (!subMenu && !action) {
          if (this.currenOrg[menu].allowed) {
            this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
            this.viewContainer.clear();
          }
        } else {
          if (this.returnIfExists(menu, subMenu, action)) {
            this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
            this.viewContainer.clear();
          }
        }
      }
    } else {
      // if any key not defined then dont show
      this.viewContainer.clear();
      // this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
