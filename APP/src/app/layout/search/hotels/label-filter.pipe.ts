import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labelFilter'
})
export class LabelFilterPipe implements PipeTransform {
  transform(markers: any[] ,search:any) :any[] {  
    if (!markers || !search) {
      return markers;
    }
  return markers.filter(marker => marker.label.toLowerCase().indexOf(search.toLowerCase()) != -1  );
  }
}
