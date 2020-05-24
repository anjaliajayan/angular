import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  countries:string[]=[];
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.commonService.getCountryList().subscribe((result: any) => {
      this.countries=result.countries;
    });
  }
  selectedCountry(data){
    console.log(data);
  }
}
