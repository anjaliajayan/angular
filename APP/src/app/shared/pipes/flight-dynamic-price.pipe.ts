import { PipeTransform, Pipe } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
    name:'flightDynamicUpdate'
})

export class flightDynamicUpdatePipe implements PipeTransform {
    transform(amt: any[] , priceUpdateFlag?: string,  priceUpdateValue?: string, flightIndexObj?: any,  flightResult?: any) :any[]{
        
        
        if(priceUpdateFlag == undefined){
            return amt;
        }else{

            
        }
    }
      

} 
