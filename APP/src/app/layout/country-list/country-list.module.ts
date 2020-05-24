import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list.component';
import { CommonService } from 'src/app/shared/services/common.service';



@NgModule({
  declarations: [CountryListComponent],
  imports: [CommonModule],
  exports:[CountryListComponent]
})
export class CountryListModule { 
  static forRoot(){
    return {
      NgModule:CountryListModule,
      providers:[CommonService]
    }
  }
}
