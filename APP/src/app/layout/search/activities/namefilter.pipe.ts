import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namefilter'
})
export class NamefilterPipe implements PipeTransform {

  transform(activity: any[],searchTerm: string): any[] {
    if (!activity || !searchTerm) {
      return activity;
    }
    return activity.filter(activityData => activityData.activityName.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1
    );
  }


  }

