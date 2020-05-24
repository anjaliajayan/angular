import { Component, OnInit } from '@angular/core';
import { ContentManagement } from 'src/app/shared/models/setup-config/content-management';
import { SetupConfigService } from 'src/app/shared/services/setup-config/setup-config.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-content-management',
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.scss']
})
export class ContentManagementComponent implements OnInit {

  limit: number = 15;
  pageIndex: number = 1;
  NewListOfHotels: Array<[ContentManagement]> = [];

  totalListOfHotels: number = 0;
  pages: number = 0;

  constructor(
    public ListOfHotelService:SetupConfigService
  ) { }


  ngOnInit() {
    this.fetchAllListOfHotels(this.limit, this.pageIndex);
  }
  fetchAllListOfHotels(limit: number, pageIndex: number) {
    this.ListOfHotelService.GetAllHotels(0,limit, pageIndex)
    .subscribe((res: any) => {
      if (res.status == 200) {
        this.totalListOfHotels = res.contentsMng;
        this.pages = this.totalListOfHotels / this.limit;
        this.NewListOfHotels = res.contentsMng;
        console.log("Check this data airline tourcodes" + this.totalListOfHotels);
        console.log("This is the response" + res);
      }
    });
  }

}
