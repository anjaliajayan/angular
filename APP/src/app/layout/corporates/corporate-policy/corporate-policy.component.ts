import { Component, OnInit } from '@angular/core';
declare const $:any;
@Component({
  selector: 'app-corporate-policy',
  templateUrl: './corporate-policy.component.html',
  styleUrls: ['./corporate-policy.component.scss']
})
export class CorporatePolicyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(document).ready(function() {
      $('.menu .item').tab();
      $('.ui.dropdown').dropdown();
    });
  }
}

