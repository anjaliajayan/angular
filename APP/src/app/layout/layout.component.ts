import { Component, OnInit } from '@angular/core';
import { CommonGuard } from '../shared/guards/common.guard';
import { UpgradeService } from '../shared/services/upgrade.service';
//import { Socket } from 'ngx-socket-io';
// import { LoaderService } from '../shared/loader';
declare var $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  sidebarToggled: boolean = false;
  showUpgradeLoader: boolean = false;
  dashboardUpgradeHeader: string;
  dashboardUpgradeContent: string;
  upgradeProcess: boolean = false;

  constructor(
    private upgrade: UpgradeService,
    //private socket: Socket
  ) {
    this.upgrade.initVersionCheck()
    this.getVersion()
    this.dashboardUpgradeHeader = "Dashboard Upgrade";
    this.dashboardUpgradeContent = "We've have upgrade to the latest revision of Dashboard. Kindly accept it to continue your new Experience.";
  }

  private getVersion() {
    // this.socket.on('version-check', (version) => {
    //   console.log(`Here I am ${version}`)
    //   if (this.upgrade.checkVersion(version)) {
    //     this.upgradeProcess = true;
    //     localStorage.setItem('_vhsh', `${this.upgrade.currentHash}`)
    //   } else {
    //     this.upgradeProcess = false;
    //   }
    // })
  }

  startUpgrade() {
    this.showUpgradeLoader = true;
    this.dashboardUpgradeHeader = "Upgrade Started";
    this.dashboardUpgradeContent = "Please wait for few minutes while we finish your upgrade process."

    setTimeout(() => {
      window.location.reload();
    }, 6000)
  }

  ngOnInit() {
    var scope = this;
    $('.ui.labeled.sidebar')
      .sidebar({
        dimPage: false,
        closable: false
      })
      localStorage.setItem("height",$('.full-sidebar').height());
  }

  onResize() {
    localStorage.setItem("height",$('.full-sidebar').height());
  }

  toggleSideBarMini() {
    $('#full-sidebar').sidebar('hide');
    $('#sidebar-mini')
      .sidebar('toggle');
    if (!this.sidebarToggled) {
      this.sidebarToggled = true;
    } else {
      this.sidebarToggled = false;
    }
    // setTimeout(() => { $('.ui.left.vertical.inverted.sidebar.labeled.menu.overlay.visible').remove(); }, 200);
  }

  toggleSideBar() {
    $('#sidebar-mini').sidebar('hide');
    $('#full-sidebar')
      .sidebar('toggle');
    if (!this.sidebarToggled) {
      this.sidebarToggled = true;
    } else {
      this.sidebarToggled = false;
    }
    //setTimeout(() => { $('.ui.left.vertical.inverted.sidebar.labeled.menu.overlay.visible').remove(); }, 200);
  }
}
