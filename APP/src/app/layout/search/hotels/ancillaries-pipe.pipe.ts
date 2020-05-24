import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined } from 'util';

@Pipe({
  name: 'ancillariesPipe'
})
export class AncillariesPipePipe implements PipeTransform {
  transform(hotelList: any[] , ancillaries:any, aceAll:any,selectedAnc:any) :any[] {
    if(aceAll){
        return hotelList;
    }else{   
    
    var filteredResults = []
    var selected = []
    var substring:any
    
    hotelList.forEach((hotel, key) => {
        if (hotel.amenity != undefined) {
            var amenitys = hotel.amenity;
            ancillaries.forEach((ancillarie) => {
                console.log("output length",output.length>0);
                if (ancillarie.label == 'Bar' && ancillarie.selected == true) {
                    substring = "BALG";
                    if (amenitys.indexOf(substring) !== -1) {
                        selected.push('BALG');
                    }
                }
                if (ancillarie.label == 'Wifi' && ancillarie.selected == true) {
                    substring = "FRWF";
                    if (amenitys.indexOf(substring) !== -1) {
                        selected.push('FRWF');
                    }
                }
                if (ancillarie.label == 'Pool' && ancillarie.selected == true) {
                    substring = "SWOT";
                    if (amenitys.indexOf(substring) !== -1) {
                        selected.push('SWOT');
                    }

                }
                if (ancillarie.label == 'Parking' && ancillarie.selected == true) {
                    substring = "ACPK";
                    if (amenitys.indexOf(substring) !== -1) {
                        selected.push('ACPK');
                    }

                }

                if (ancillarie.label == 'Restaurant' && ancillarie.selected == true) {
                    substring = "REST";
                    if (amenitys.indexOf(substring) !== -1) {
                        selected.push('REST');
                    }

                }
            });
    
            //------taking unique value-------
            var flags:any = [],
                    output:any=[],
                    l = selected.length,
                    i;
            for (i = 0; i < l; i++) {
                if (flags[selected[i]])
                    continue;
                flags[selected[i]] = true;
                output.push(selected[i]);
            }
            //------end---------
            console.log("output length",output.length>0);

            if (output.length>0) {
                var cnt = 0;
                output.forEach((result) => {
                    if (amenitys.indexOf(result) !== -1) {

                        cnt++;
                    }
                });

                if (cnt == output.length) {
                    filteredResults.push(hotel)
                }

            }

        }

        //-------default all will b false -------
        // if (ancillaries[0].selected == false && ancillaries[1].selected == false && ancillaries[2].selected == false && ancillaries[3].selected == false && ancillaries[4].selected == false) {
        //     filteredResults.push(hotel);
        // }
    });
    return filteredResults;
}
  }
}
