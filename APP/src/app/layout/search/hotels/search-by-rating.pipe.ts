import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByRating'
})
export class SearchByRatingPipe implements PipeTransform {
   transform(hotelList: any[] , ratings:any, ratingAll:any,selectedRating:any) :any[] {
    //  console.log("selected Rating",selectedRating);
    //  console.log("ratings",ratings, "ratingAll",ratingAll);
  let filteredResults:any = [];
  hotelList.filter( hotel =>  {
    ratings.forEach(rating => {
      if((Number(hotel.star_rating) == Number(rating.value)  && rating.selected == true)){
        filteredResults.push(hotel);
      }
    }); 
   });
  return  filteredResults;     
  }

}

