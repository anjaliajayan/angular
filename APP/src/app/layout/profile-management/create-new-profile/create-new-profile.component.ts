import { Component, OnInit } from '@angular/core';

declare const moment: any;
declare const $: any;

@Component({
  selector: 'app-create-new-profile',
  templateUrl: './create-new-profile.component.html',
  styleUrls: ['./create-new-profile.component.scss']
})
export class CreateNewProfileComponent implements OnInit {

  //THIS MODULE CONTAINS SOME SHITTY GLITCH ABOUT THREE RERENDER ITSELF BADY!

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $('.menu .item').tab();
    $('.ui.dropdown').dropdown();
  }
}
