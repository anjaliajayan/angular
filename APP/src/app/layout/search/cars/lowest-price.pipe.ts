import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
name: 'lowestPrice'
})
export class LowestPricePipe implements PipeTransform {
transform(car: any[] , lhPrice: string) :any[] {
// console.log(hotelList);
console.log("lhPrice",lhPrice)
if(!car || !lhPrice){
return car;
}
return car.sort(function(a, b){
if(lhPrice == 'HL'){
return Number(b.markupPrice) - Number(a.markupPrice);
}
if(lhPrice == 'LH'){
return Number(a.markupPrice) - Number(b.markupPrice);
}

});

}

}