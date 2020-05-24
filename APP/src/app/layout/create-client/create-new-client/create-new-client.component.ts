import { Component, OnInit } from '@angular/core';

declare const moment: any;
declare const $: any;

@Component({
  selector: 'app-create-new-client',
  templateUrl: './create-new-client.component.html',
  styleUrls: ['./create-new-client.component.scss']
})
export class CreateNewClientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $('.ui.dropdown').dropdown();
  }
}
