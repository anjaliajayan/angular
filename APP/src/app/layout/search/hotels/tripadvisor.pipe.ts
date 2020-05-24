import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'tripadvisor'
})
export class TripadvisorPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}
  transform(hotel: any): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    // console.log("trip advisor",hotel);
    var url  = `http://www.tripadvisor.com/WidgetEmbed-cdspropertysummary?display=true&partnerId=0DC658C8DC2A463A887F1B6A10C37757&lang=en&locationId=${hotel.tripAdvisorId}`;
    // console.log("sanitizer",this.sanitizer.bypassSecurityTrustResourceUrl(url));
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
