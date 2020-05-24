import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Bookings } from 'src/app/shared/models';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/shared/services/common.service';
import { bookingStatus } from "src/app/shared/utils/common";
import { SearchService } from 'src/app/shared/services/search.service';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from 'src/app/shared/services/excel.service';
import { BookingsService } from 'src/app/shared/services';
import noResultsTemplate from 'src/app/shared/utils/no-data-results-grid.helper';
import { ModalService } from './../../_modal';


declare const moment: any;
declare const $: any;

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    limit: number = 10;
    page: any = 0;
    bookings: Array<Bookings[]> = [];
    totalBookings: number = 0;
    filterForm: FormGroup;
    activeProducts: any;
    bookingStatus: any;
    agents: any;
    suppliers: any;
    formData: any = {};
    bookingInfo: any = {};
    bookingsLoader: any = false;
    messages: {} = {
        emptyMessage: noResultsTemplate
    }
    filterPage: Boolean = false

    constructor(private bookingService: BookingsService,
        private router: Router,
        private activeRoute: ActivatedRoute,
        private fb: FormBuilder,
        private commonService: CommonService,
        private searchService: SearchService,
        private toastr: ToastrService,
        private modalService: ModalService,
        private excelService: ExcelService) {


        this.bookingStatus = bookingStatus;
        this.filterForm = this.fb.group({
            page: this.page,
            trip_id: [''],
            agent_reference: [''],
            status: [''],
            product_id: [''],
            supplier_id: [''],
            organisation_id: [''],
            start_date: [''],
            end_date: [''],
        })

        this.formData = {
            page: this.page,
            trip_id: ''
        }
        this.agentsList();
        this.getSettings();
        this.getSuppliers();

    }
    ngOnInit() {
        this.searchService.searchedData.subscribe(searchData => {
            this.formData = searchData;
            this.formData = { page: this.page, ...this.formData }
            this.fetchBooking(this.formData);
        })
    }

    // get agents
    agentsList() {
        this.commonService.getSelfAgentsList().subscribe((result: any) => {
            this.agents = result.listData;
        });
    }
    getSettings() {
        let permArr = { "name": ['ActiveProducts'] };
        this.commonService.getSettingList(permArr).subscribe((result: any) => {
            let activeProductsData = JSON.parse(result.listData.find(list => list.name == 'ActiveProducts').value);
            let keyValue = Object.entries(activeProductsData).map(([key, value]) => ({ key, value }));
            this.activeProducts = keyValue.filter(o => Object.keys(o).some(k => o.value == 1))
            console.log("active:::", this.activeProducts)
        })
    }

    // get suppliers
    getSuppliers() {
        this.commonService.getSupplierList().subscribe((result: any) => {
            this.suppliers = result.listData;
        });
    }

    searchBookings() {
        this.filterPage = true
        let form = this.filterForm.value;
        form.page = this.formData.page;
        this.fetchBooking(form);
    }

    filterFormReset() {
        this.filterForm.patchValue({
            trip_id: '',
            agent_reference: '',
            start_date: '',
            end_date: '',
            product_id: 'all',
            supplier_id: 'all',
            organisation_id: 'all',
            status: 'all'
        })
        $('.ui.dropdown').dropdown();
    }

    ngAfterViewInit() {
        var scope = this;
        $('.ui.dropdown').dropdown();
        // scope.filterForm.patchValue({ 'start_date': moment().format('DD/MM/YYYY') }); //.subtract(90, 'day')
        // scope.filterForm.patchValue({ 'end_date': moment().format('DD/MM/YYYY') });
        $(document).ready(function () {
            $(function () {
                $('input[name="start_date"]').daterangepicker({
                    singleDatePicker: true,
                    showDropdowns: true,
                    // minYear: 1901,
                    // startDate: moment(),
                    autoUpdateInput: false,
                    //minDate: moment(),
                    // maxYear: parseInt(moment().format('YYYY'), 10)
                }, function (start, end, label) {
                    var years = moment().diff(start, 'years');
                    scope.filterForm.patchValue({ 'start_date': moment(start).format('DD/MM/YYYY') });
                });
                $('input[name="end_date"]').daterangepicker({
                    singleDatePicker: true,
                    showDropdowns: true,
                    // minYear: 1901,
                    // startDate: moment().subtract(90, 'day'),
                    // maxYear: parseInt(moment().format('YYYY'), 10),
                    autoUpdateInput: false,
                }, function (start, end, label) {
                    var years = moment().diff(start, 'years');
                    scope.filterForm.patchValue({ 'end_date': moment(start).format('DD/MM/YYYY') });
                });
            });
        })
    }

    fetchBooking(formData: any) {
        this.bookingsLoader = true;
        this.bookingService.fetchBookings(formData)
            .subscribe((res: any) => {
                if (res.status) {
                    this.totalBookings = res.result.total;
                    this.page = res.result.page;
                    this.bookings = res.result.data;
                    console.log("this.bookings:::::",this.bookings)
                    this.bookingsLoader = false;
                }
            }, err => {
                this.toastr.error(`Oops`, `Something bad happened at our end`, {
                    timeOut: 10000,
                    progressBar: false,

                    positionClass: 'toast-bottom-right'
                });
                this.bookingsLoader = false;
            });
    }

    pageCallback(event: any) {
        let offset = event.offset;
        this.formData.page = offset;
        this.filterPage ? this.searchBookings() : this.fetchBooking(this.formData)
    }

    exportData() {
        this.bookingService.exportBooking(this.filterForm.value).subscribe((result: any) => {
            if (result.type != 'error') {
                let exportResult = result.data;
                this.excelService.exportAsExcelFile(exportResult, 'bookings');
            } else {
                this.toastr.error(`${result.msg}`, `${result.msg}`, {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }

    viewBookings(valObj: any) {
        console.log(valObj)
        //tripId : string;
        //this.tripId = valObj.tripID
        let navigationExtras: NavigationExtras = {
            queryParams: valObj
        }
        // console.log('product_name..........',valObj.productNames)
        if(valObj.productNames=="Ins "){
            this.router.navigateByUrl(`/bookings/insurance-book-details/${valObj.trip_id}`);
        }
        else if(valObj.productNames=="Car "){
            this.router.navigateByUrl(`/bookings/car-booking-details/${valObj.trip_id}`);
        }
        else if(valObj.productNames=="Act "){
            this.router.navigateByUrl(`/bookings/activity-booking-details/${valObj.trip_id}`);
        }else if(valObj.productNames=="Hotel "){
            this.router.navigateByUrl(`/bookings/hotel-booking-details/${valObj.trip_id}`);
        }
        else{
            this.router.navigateByUrl(`/bookings/booking-details/${valObj.trip_id}`);
        }
       
    }

    showImportPNR(modalId: any) {
        this.modalService.open(modalId);
    }

    closeModal(modalId: any) {
        this.modalService.close(modalId);
    }
}