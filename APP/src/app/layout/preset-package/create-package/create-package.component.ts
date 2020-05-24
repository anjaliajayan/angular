import { Component, OnInit } from '@angular/core';
import { CKEditorModule } from 'ckeditor4-angular';

declare const $:any;
@Component({
  selector: 'app-create-package',
  templateUrl: './create-package.component.html',
  styleUrls: ['./create-package.component.scss']
})
export class CreatePackageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('.menu .item').tab();
      $('.ui.checkbox').checkbox('attach events', '.toggle.button');
      $('.ui.dropdown').dropdown();
    });
  }

}
