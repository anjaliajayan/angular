import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PosService } from 'src/app/shared/services/pos-service/pos-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-active-suppliers',
  templateUrl: './active-suppliers.component.html',
  styleUrls: ['./active-suppliers.component.scss']
})
export class ActiveSuppliersComponent implements OnInit {

  suppiersForm: FormGroup;
  active_suppliers: FormArray;
  organisation_ID: any;
  posInfo: any;
  supplierFlights: Array<any> = [];
  supplierHotel: Array<any> = [];
  
  supplierCar: Array<any> = [];
  supplierInsurance: Array<any> = [];
  supplierActivity: Array<any> = [];
  isChecked_f:boolean = false;
  isChecked_in:boolean=false;
  isChecked_h:boolean=false;
  isChecked_c:boolean=false;
  isChecked_ac:boolean=false;
  suppliersCheck={};
  flights:any;
  suppliers:any;


  constructor(private fb: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private posService: PosService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.organisation_ID = this.activeRoute.snapshot.params.id;
    this.getOrganisationInfo(this.organisation_ID);

    this.getAllsuppliers();
   
    this.suppiersForm = this.fb.group({
      active_suppliers_flights: this.fb.array([]),
      active_suppliers_hotels: this.fb.array([]),
      active_suppliers_cars: this.fb.array([]),
      active_suppliers_insurance: this.fb.array([]),
      active_suppliers_activities: this.fb.array([]),
    })
  }
  get active_suppliers_flights(): any {
    return this.suppiersForm.get('active_suppliers_flights') as FormArray;
  }

  get active_suppliers_hotels(): any {
    return this.suppiersForm.get('active_suppliers_hotels') as FormArray;
  }

  get active_suppliers_cars(): any {
    return this.suppiersForm.get('active_suppliers_cars') as FormArray;
  }

  get active_suppliers_activities(): any {
    return this.suppiersForm.get('active_suppliers_activities') as FormArray;
  }

  get active_suppliers_insurance(): any {
    return this.suppiersForm.get('active_suppliers_insurance') as FormArray;
  }

  getOrganisationInfo(organisation_ID: number) {
    this.posService.getPosDetails(organisation_ID).subscribe((result: any) => {
      if (result.status) {
        this.posInfo = result.result;
      
        this.flights = JSON.parse(result.result.active_suppliers).active_suppliers_flights;
        this.flights.forEach((x) => {
          this.active_suppliers_flights.push(this.fb.group(x))
        });
    
        let hotels = JSON.parse(result.result.active_suppliers).active_suppliers_hotels;
        hotels.forEach((x) => {
          this.active_suppliers_hotels.push(this.fb.group(x))
        });

        let cars = JSON.parse(result.result.active_suppliers).active_suppliers_cars;
        cars.forEach((x) => {
          this.active_suppliers_cars.push(this.fb.group(x))
        });

        let insurances = JSON.parse(result.result.active_suppliers).active_suppliers_insurance;
        insurances.forEach((x) => {
          this.active_suppliers_insurance.push(this.fb.group(x))
        });

        let activities = JSON.parse(result.result.active_suppliers).active_suppliers_activities;
        activities.forEach((x) => {
          this.active_suppliers_activities.push(this.fb.group(x))
        });
      }
    });
  }

  getAllsuppliers() {

    this.posService.getAllActiveSuppliers().subscribe((result: any) => {

      this.suppliers = result.result;
      this.supplierFlights =this.suppliers.filter(e => e.is_flight).map(e => {
        return {
          active_name: e.name,
        } });

      console.log(this.supplierFlights)

      this.supplierHotel = this.suppliers.filter(e => e.is_hotel).map(e => {
        return {
          active_name: e.name,
          // is_hotel:e.is_hotel,
        }
      });

      this.supplierCar = this.suppliers.filter(e => e.is_car).map(e => {
        return {
          active_name: e.name,
          // is_car:e.is_car,
        }
      });

      this.supplierActivity = this.suppliers.filter(e => e.is_activities).map(e => {
        return {
          active_name: e.name,
          // is_activities:e.is_activities,
        }
      });

      this.supplierInsurance = this.suppliers.filter(e => e.is_insurance).map(e => {
        return {
          active_name: e.name,
          // is_insurance:e.is_insurance,
        }
      });

      this.supplierInsurance = this.suppliers.filter(e => e.is_insurance).map(e => {
        return {
          active_name: e.name,
          // is_insurance:e.is_insurance,
        }
      });

      if (this.supplierFlights.length) {
        this.active_suppliers_flights.push(this.fb.group({}));
        const FormGroup = this.active_suppliers_flights.get('0') as FormGroup;
        this.supplierFlights.forEach(e => {
          FormGroup.addControl(e.active_name, new FormControl((e.is_flight == null) ? false : true));

        });
      }

      if (this.supplierHotel.length) {
        this.active_suppliers_hotels.push(this.fb.group({}));
        const FormGroup = this.active_suppliers_hotels.get('0') as FormGroup;
        this.supplierHotel.forEach(e => {
          FormGroup.addControl(e.active_name, new FormControl((e.is_hotel == null) ? false : true));
        });
      }

      if (this.supplierCar.length) {
        this.active_suppliers_cars.push(this.fb.group({}));
        const FormGroup = this.active_suppliers_cars.get('0') as FormGroup;
        this.supplierCar.forEach(e => {
          FormGroup.addControl(e.active_name, new FormControl((e.is_car == null) ? false : true));
        });
      }

      if (this.supplierActivity.length) {
        this.active_suppliers_activities.push(this.fb.group({}));
        const FormGroup = this.active_suppliers_activities.get('0') as FormGroup;
        this.supplierActivity.forEach(e => {
          FormGroup.addControl(e.active_name, new FormControl((e.is_activities == null) ? false : true));
        });
      }

      if (this.supplierInsurance.length) {
        this.active_suppliers_insurance.push(this.fb.group({}));
        const FormGroup = this.active_suppliers_insurance.get('0') as FormGroup;
        this.supplierInsurance.forEach(e => {
          FormGroup.addControl(e.active_name, new FormControl((e.is_insurance == null) ? false : true));
        });
      }
    });
  }

  submitActiveSuppliers() {

    this.posService.updatePosDetails({organisation_id: this.organisation_ID,name:this.posInfo.name,
      email:this.posInfo.email,country_id:this.posInfo.country_id,contact:this.posInfo.contact ,address_1: this.posInfo.address_1,
      address_2: this.posInfo.address_2 ,city_id:this.posInfo.city_id,state_province:this.posInfo.state_province,payment_gateway:this.posInfo.payment_gateway,
      currency_id:this.posInfo.currency_id, timezone_id:this.posInfo.timezone_id,numberOfUsers:this.posInfo.numberOfUsers,credit_limit:this.posInfo.credit_limit, 
      zip: this.posInfo.zip,contact_country_id:  this.posInfo.contact_country_id ,corporate_type:this.posInfo.corporate_type,
      active_suppliers: this.suppiersForm.value,tab:'suppliers',}).subscribe((result: any) => {
      if (result.status) {
        this.toastr.success(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['/pos/basic-edit/'+this.organisation_ID])
      } else {
        this.toastr.error(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }

    });
  }

  cancelSupplier() {
    this.router.navigate(['/pos/basic-edit/',this.organisation_ID])
  }

  checkAllInsurancesuppliers(event) {
    this.isChecked_in = !this.isChecked_in;
    let checked =this.isChecked_in;
    const FormGroup = this.active_suppliers_insurance.get('0') as FormGroup;
    this.supplierInsurance.forEach(e => {
      FormGroup.get(e.active_name).setValue(checked)
    });
  }

  checkAllFlightsuppliers(){
    this.isChecked_f = !this.isChecked_f;
    let checked =this.isChecked_f;
    const FormGroup = this.active_suppliers_flights.get('0') as FormGroup;
    const FormGroupp = this.active_suppliers_flights.get('1') as FormGroup;
    this.supplierFlights.forEach(e => {
      FormGroup.get(e.active_name).setValue(checked);
      // FormGroupp.get(e.is).setValue(checked);
    });
    this.supplierFlights.map(e => {
      FormGroupp.get(e.is_all_flight).setValue(checked);
    });
 
 
  }
  checkAllHotelsuppliers(){
    this.isChecked_h = !this.isChecked_h;
    let checked =this.isChecked_h;
    const FormGroup = this.active_suppliers_hotels.get('0') as FormGroup;
    this.supplierHotel.forEach(e => {
      FormGroup.get(e.active_name).setValue(checked)
    });
  }

  checkAllCarsuppliers(){
    this.isChecked_c = !this.isChecked_c;
    let checked =this.isChecked_c;
    const FormGroup = this.active_suppliers_cars.get('0') as FormGroup;
    this.supplierCar.forEach(e => {
      FormGroup.get(e.active_name).setValue(checked)
    });
  }

  checkAllActivitysuppliers(){
    this.isChecked_ac = !this.isChecked_ac;
    let checked =this.isChecked_ac;
    const FormGroup = this.active_suppliers_activities.get('0') as FormGroup;
    this.supplierActivity.forEach(e => {
      FormGroup.get(e.active_name).setValue(checked)
    });
  }
}
