import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'lowestPrice'
})
export class LowestPricePipe implements PipeTransform {
    transform(hotelList: any[] , lhPrice: string,lowestPrice:any) :any[] { 
      if(!hotelList || !lhPrice){
          return hotelList;
      }
       return hotelList.sort(function(a, b){
         if(lhPrice == 'HL'){
          return Number(b.markup_price) - Number(a.markup_price);
         }
         if(lhPrice == 'LH'){
          return Number(a.markup_price) - Number(b.markup_price);
         }
      
      });
      
    }
    
  }