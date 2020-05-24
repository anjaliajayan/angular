import { PipeTransform, Pipe } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
    name:'flightListingFilter'
})

export class flightListingFilterPipe implements PipeTransform {
    transform(flightList: any[] , filterObj?: any[],flightSearchResultsOg?: any[],selectedAirlineValue?: string,selectedAirportValue?: string, selectedStoptValue?: string, airlineFltrData?: any[],airportFltrData?: any[], stopFltrData?: any[]) :any[]{

        
        if(!flightList || (selectedAirlineValue == undefined && selectedAirportValue == undefined && selectedStoptValue == undefined)){
            return flightList;
        }
        let tempRes:any = _.cloneDeep(flightSearchResultsOg);
        let indxArr = [] //used for airline
        let airportIndxArr:any = [] //used for airport
        let stopIndxArr:any = [] //used for stop
        let segArray = []
        let selectedAirlineArr:any = []
        let selectedAirportArr:any = []
       /// let selectedStopArr:any = []
        
        //Airline Filter
        
        if(selectedAirlineValue){
             _.forEach(airlineFltrData, function(item) {
                if(item.ischecked){
                    selectedAirlineArr.push(item.code)
                }
            });

            if(selectedAirlineArr.length > 0){

               // args[0].isAirlineFilter = true
                for(let seg = 0; seg < Object.keys(tempRes.DataLists.FlightSegmentList).length; seg++){
                    if(_.includes(selectedAirlineArr,tempRes.DataLists.FlightSegmentList[Object.keys(tempRes.DataLists.FlightSegmentList)[seg]].MarketingCarrier.AirlineID.text)){
                        segArray.push(Object.keys(tempRes.DataLists.FlightSegmentList)[seg])
                    }
                }
                for(let segArrInx = 0; segArrInx < segArray.length; segArrInx++){
                    for(let fo = 0; fo < tempRes.FlightOffer.length ; fo++){
                        let chkSerArr = tempRes.FlightOffer[fo][Object.keys(tempRes.FlightOffer[fo])[0]][0][tempRes.FlightOffer[fo][Object.keys(tempRes.FlightOffer[fo])[0]][0].flight].segment[0]
                        if(_.includes(chkSerArr,segArray[segArrInx])){
                            indxArr.push(fo)
                        }
                    }
                }
                indxArr = _.uniq(indxArr)
                
                // flightList[2].value = []
                // flightList[4].value = []
                // for(let newIdx = 0; newIdx < indxArr.length; newIdx++){
                //     let newIndx = indxArr[newIdx];
                //     flightList[2].value.push(tempRes.FlightOffer[newIndx])
                //     flightList[4].value.push(tempRes.OffersGroup[newIndx])
                // }

            } 
            else {
               // args[0].isAirlineFilter = false
                flightList[2].value = []
                flightList[4].value = []
                flightList[2].value = tempRes.FlightOffer
                flightList[4].value = tempRes.OffersGroup


            }  


        }
        
        //Airport filter
        if(selectedAirportValue){
            for(let dep = 0; dep < Object.keys(airportFltrData['departure']).length; dep++){
                if(airportFltrData['departure'][Object.keys(airportFltrData['departure'])[dep]].isChecked){
                    selectedAirportArr.push(Object.keys(airportFltrData['departure'])[dep]+'_departure')
                }
            }
            for(let arr = 0; arr < Object.keys(airportFltrData['arrival']).length; arr++){
                if(airportFltrData['arrival'][Object.keys(airportFltrData['arrival'])[arr]].isChecked){
                    selectedAirportArr.push(Object.keys(airportFltrData['arrival'])[arr]+'_arrival')
                }
            }
           
            if(selectedAirportArr.length > 0){
                for(let k = 0; k < selectedAirportArr.length; k++){
                    for(let v = 0; v < tempRes.FlightOffer.length; v++){
                        for(let w = 0; w < tempRes.FlightOffer[v][Object.keys(tempRes.FlightOffer[v])[0]].length; w++){ //Taking First DESTARR
                           console.log("hhh")
                           let flighMatchKey = tempRes.FlightOffer[v][Object.keys(tempRes.FlightOffer[v])[0]][w].flight
                            if(_.includes(airportFltrData[selectedAirportArr[k].split("_")[1]][selectedAirportArr[k].split("_")[0]].flightKeys, flighMatchKey)){
                                airportIndxArr.push(v) 
                            }
                        }
                    }                  
                }
                

            }else{

            }
            airportIndxArr = _.uniq(airportIndxArr)           
        }

        
        //Stop Filter
        if(selectedStoptValue){
            for(let st = 0; st < Object.keys(stopFltrData).length; st++ ){
                if(stopFltrData[Object.keys(stopFltrData)[st]].isChecked){
                    stopIndxArr = _.union(stopFltrData[Object.keys(stopFltrData)[st]].Indexes,stopIndxArr) 
                }
            }
           // stopIndxArr = stopFltrData[selectedStoptValue].Indexes

        }
        
        //Apply Indexing Condition 
        let newIndxArr:any = []
        if(indxArr.length > 0 && airportIndxArr.length > 0){
            newIndxArr = _.intersection(indxArr, airportIndxArr)
        }else if(indxArr.length == 0 && airportIndxArr.length > 0){
            newIndxArr = airportIndxArr
        }else if(indxArr.length> 0 && airportIndxArr.length == 0){
            newIndxArr = indxArr
        }

        
        if(newIndxArr.length > 0 && stopIndxArr.length > 0){
            newIndxArr = _.intersection(newIndxArr, stopIndxArr)
        }else if(stopIndxArr.length > 0){
            newIndxArr = stopIndxArr
        }
            
        
        if(newIndxArr.length > 0){
            flightList[2].value = []
            flightList[4].value = []
            for(let newIdx = 0; newIdx < newIndxArr.length; newIdx++){
                let newIndx = newIndxArr[newIdx];
                flightList[2].value.push(tempRes.FlightOffer[newIndx])
                flightList[4].value.push(tempRes.OffersGroup[newIndx])
            }
            
            return flightList
        }else{
            if((selectedAirlineValue == undefined ||selectedAirlineValue.includes("uncheck")) && (selectedAirportValue == undefined || selectedAirportValue.includes("uncheck")) && (selectedStoptValue == undefined || selectedStoptValue.includes("uncheck"))){
                flightList[2].value = []
                flightList[4].value = []
                flightList[2].value = tempRes.FlightOffer
                flightList[4].value = tempRes.OffersGroup
            }else{
                flightList[2].value = []
                flightList[4].value = []
            }
            
            return flightList

        }
        
        
    }

} 
