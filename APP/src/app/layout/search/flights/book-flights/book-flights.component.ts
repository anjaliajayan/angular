import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-book-flights',
  templateUrl: './book-flights.component.html',
  styleUrls: ['./book-flights.component.scss']
})
export class BookFlightsComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(FarePriceConditionsSheet);
  }

  myControl = new FormControl();
  options: string[] = ['Cash', 'Credit Card', 'Cheque', 'Non-ref', 'Non-remit'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}

@Component({
  selector: 'fare-price-conditions-sheet',
  templateUrl: 'fare-conditions-sheet/fare-conditions-sheet.html',
})
export class FarePriceConditionsSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<FarePriceConditionsSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}