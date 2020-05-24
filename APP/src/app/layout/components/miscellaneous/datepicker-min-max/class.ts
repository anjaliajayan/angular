import {Component, Input, ViewEncapsulation} from '@angular/core';
import {MatCalendarCellCssClasses} from '@angular/material/datepicker';
import { OnInit } from '@angular/core';
import { FormControl, ControlContainer, FormGroupDirective } from '@angular/forms';

/** @title Datepicker with min & max validation */
@Component({
  selector: 'datepicker-min-max',
  templateUrl: 'index.html',
  styleUrls: ['style.css'],
  encapsulation: ViewEncapsulation.None,
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class DatepickerMinMax implements OnInit {
  datepickerMinMaxForm;
  @Input() name: string;
  @Input() label: string;
  @Input() paxType: string;
  @Input() formControlIndex: number;
  minDate: Date;
  maxDate: Date;
  minYear: number = -90;
  maxYear: number = -12;
  currentYear = new Date().getFullYear();

  ngOnInit() {
    this.datepickerMinMaxForm = this.parentF.form;
    if (!this.datepickerMinMaxForm.controls.dob) {
      this.datepickerMinMaxForm.addControl('dob', new FormControl(this.maxDate));
    }
    this.datepickerMinMaxForm.controls.paxForm.controls[this.formControlIndex].addControl('dob', new FormControl(this.maxDate));
  }

  ngAfterViewInit(): void {
    console.log("FEQ - DatepickerMinMax::ngAfterViewInit - Start - " + this.paxType);
    if (this.paxType) {
      if (this.paxType.toLowerCase() === 'adt') {
        // Doing nothing
      } else if (this.paxType.toLowerCase() === 'chd') {
        this.minYear = -12;
        this.maxYear = -2;
      } else if (this.paxType.toLowerCase() === 'inf') {
        this.minYear = -2;
        this.maxYear = 0;
      }
    }
    this.minDate = new Date(this.currentYear + this.minYear, 0, 1);
    this.maxDate = new Date(this.currentYear + this.maxYear, 11, 31);
 }

  constructor(private parentF: FormGroupDirective) {
    this.minDate = new Date(this.currentYear + this.minYear, 0, 1);
    this.maxDate = new Date(this.currentYear + this.maxYear, 11, 31);
  }

  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return (date === 1) ? 'selected-custom-date-class' : '';
  }
}