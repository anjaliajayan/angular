import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mealPlanFilter'
})
export class MealPlanFilterPipe implements PipeTransform {
  transform(ListOfRooms: any[], boardTypeArray: any, selectedBoardType: any, selectedAll:boolean): any[] {
    let filteredResults:any = [];
    // console.log("list of rooms", ListOfRooms.length, "board Type array", boardTypeArray, "selectedBoardType",selectedBoardType);
    if(selectedAll == true && selectedBoardType == undefined){
      return ListOfRooms;
    }else{
        ListOfRooms.filter( room =>  {
          boardTypeArray.forEach(boarType => {
            if((room.board_type.toLowerCase().indexOf(boarType.value.toLowerCase())!=-1)&&boarType.selected == true ){
              filteredResults.push(room);
            }
          }); 
        });       
        return  filteredResults;
   }   
  }

}
