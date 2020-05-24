import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InsuranceService } from '../../../../shared/services/insurance-services.services';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

const Entities = require('html-entities').AllHtmlEntities;



@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.scss']
})
export class InsuranceListComponent implements OnInit {
    @Input() insuranceList:any;
    @Input() insuranceSearchCriteria:any;
    @Output() insuranceBlock = new EventEmitter<any>();
    insuranceblockList: any;
    divVal: any;
  insuranceListss: any;
  searchTerm:string;
  insurancehtml: any;
  lhPrice: string= '';
  listInsuranceSpinner:boolean = false;
  displayDetail: boolean = false;
  displayText: string = 'Show';
  size: any;
  selectedPrice: any;
  high2low: string = 'High to Low';

   
  constructor(

    private insuranceService: InsuranceService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitized: DomSanitizer,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {

     
const entities = new Entities();
 
//console.log(entities.encode('<>"&©®∆')); // &lt;&gt;&quot;&amp;&copy;&reg;∆
//console.log(entities.encodeNonUTF('<>"&©®∆')); // &lt;&gt;&quot;&amp;&copy;&reg;&#8710;
//console.log(entities.encodeNonASCII('<>"&©®∆')); // <>"&©®&#8710;
//console.log(entities.decode('&lt;&gt;&quot;&amp;&copy;&reg;')); // <>"&©®
      this.insuranceListss=this.insuranceList.Insurances.Insurance;
      this.size=this.insuranceListss.length
      //console.log("insurance loading:::::::::",this.insuranceListss.length);
       console.log("InsuranceSearchCriteria:::::::::",this.insuranceSearchCriteria);
      // this.insurancehtml = this.sanitized.bypassSecurityTrustHtml(this.insuranceListss);
      // console.log("insurancehtml:::::::::",this.insuranceListss);
      
     
  }
  modifySearch() {
    console.log(this.modifySearch); 
    window.location.reload();
       
  }

 
  convertToString(str){
    const entities = new Entities();
    let string = str.toString();
     let htmlout = entities.decode(string)
     return htmlout;
  }
	insuranceBlocking(params) {
    
    const data = {
      sc: this.insuranceSearchCriteria,
      bi: params,
     
    }
    this.listInsuranceSpinner = true;
    
    console.log('testtttt-----',data);
		this.insuranceService.blockInsurance(data).subscribe((respt: any) => {
			 if (respt.result.insurances.TransactionLog.status != "Failure") {
       
				// this.isSearchCompleted = true;
        this.insuranceblockList =respt;
         console.log('server responsessssss', this.insuranceblockList );
         
      //  alert('request to block has been sent');
        this.router.navigateByUrl('search/insurances/insurance-Block' , { state: this.insuranceblockList });
       }else{
        this.toastr.warning(respt.result.insurances.TransactionLog.error['message'], `Error `, {
          timeOut: 4000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        })
        return;
       }
     //  console.log('server resessssss', respt.result.insurances.TransactionLog.error['message'] );
    });
   
	}
  showFurther: any;
  showfurtherDetails(divVal) {
    this.displayDetail = !this.displayDetail;
    if(this.displayDetail) {
      this.displayText = 'Hide';
    } else {
      this.displayText = 'Show';
    }
    this.showFurther = divVal;
    console.log(this.showFurther);
  }

  // priceFilter(event){
  //   if(event.type == 'click'){

  //     if(this.lhPrice.toString() == ''){
  //       this.lhPrice = 'LH'; 
  //     }else if(this.lhPrice.toString() == 'LH'){
  //       this.lhPrice = 'HL';
  //     }else{
  //       this.lhPrice = 'LH';
  //     }
  //   }
    
  // }

//adding filters
priceFilter(event) {
  


  if (event.type == 'click') {
    if (this.lhPrice.toString() == '') {
      this.lhPrice = 'HL';
    } else {
     this.lhPrice =  this.lhPrice.split("").reverse().join("");    
      
    }
  }

  if(this.lhPrice=="HL"){
    this.high2low ="Low to High";
      }else{
        this.high2low ="High to Low";
      }
  this.selectedPrice = Math.floor((Math.random() * 100) + 1);
  console.log("price", this.lhPrice);
}




  // filterInsuranceList(data){
  //   console.log("::::::",data);
  // }

 
}
