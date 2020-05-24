import { Component, OnInit } from '@angular/core';


declare const moment: any;
declare const $: any;
@Component({
  selector: 'app-setup-configuration',
  templateUrl: './setup-configuration.component.html',
  styleUrls: ['./setup-configuration.component.scss']
})
export class SetupConfigurationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $('.menu .item').tab();
    $('.ui.dropdown').dropdown();
  }
}
