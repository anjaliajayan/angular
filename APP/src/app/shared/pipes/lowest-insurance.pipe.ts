import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'lowestPrice'
})
export class LowestPricePipe implements PipeTransform {
    transform(insuranceListss: any[] , lhPrice: string ,selectedPrice:any) :any[] {
      // console.log('insurance_list.......',insuranceListss);
      //console.log("lhPrice",lhPrice)
      if(!insuranceListss || !lhPrice){
          return insuranceListss;
      }
       return insuranceListss.sort(function(a, b){
         if(lhPrice == 'HL'){
          return Number(b.markupPrice) - Number(a.markupPrice);
         }
         if(lhPrice == 'LH'){
          return Number(a.markupPrice) - Number(b.markupPrice);
         }
      
      });
      
    }
    
  }