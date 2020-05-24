import { Component, OnInit } from '@angular/core';

declare const $:any;
@Component({
  selector: 'app-list-saved-packages',
  templateUrl: './list-saved-packages.component.html',
  styleUrls: ['./list-saved-packages.component.scss']
})
export class ListSavedPackagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('.menu .item').tab();
      $('.ui.dropdown').dropdown();
  });
}

}
