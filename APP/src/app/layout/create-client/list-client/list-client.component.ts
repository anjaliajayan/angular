import { Component, OnInit } from '@angular/core';

declare const moment: any;
declare const $: any;

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $('.ui.dropdown').dropdown();
  }
}
