import { Component, OnInit } from '@angular/core';
declare const $:any;
@Component({
  selector: 'app-corporate-profile',
  templateUrl: './corporate-profile.component.html',
  styleUrls: ['./corporate-profile.component.scss']
})
export class CorporateProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(document).ready(function() {
      $('.menu .item').tab();
      $('.ui.dropdown').dropdown();
      $('.ui.checkbox').checkbox();
    });
  }

}
