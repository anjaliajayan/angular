import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapRatingFilter'
})
export class MapRatingFilterPipe implements PipeTransform {
  transform(markers: any[] , ratings:any, ratingAll:any,selectedRating:any) :any[] {
    //  console.log("selected Rating",selectedRating);
    //  console.log("ratings",ratings, "ratingAll",ratingAll);
  let filteredResults:any = [];
  markers.filter( marker =>  {
    ratings.forEach(rating => {
      if((Number(marker.rating) == Number(rating.value)  && rating.selected == true)){
        filteredResults.push(marker);
      }
    }); 
   });
  return  filteredResults;     
  }

}
