(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{ic73:function(t,n,e){"use strict";e.r(n);var o=e("ofXK"),i=e("wd/R"),r=e("3Pt+"),a=e("lM/l"),c=e("fXoL"),p=e("7o2P"),b=e("tyNb"),s=e("5eHb"),l=e("w8Af");function u(t,n){if(1&t&&(c.Wb(0,"option",40),c.Jc(1),c.Vb()),2&t){const t=n.$implicit;c.qc("value","66||"+t.supplier+"||"+t.currency),c.Cb(1),c.Lc(" ",t.supplier," ")}}function d(t,n){1&t&&(c.Wb(0,"div",41),c.Jc(1," Above field must be strictly Numeric Values. "),c.Vb())}function g(t,n){if(1&t&&(c.Wb(0,"option",40),c.Jc(1),c.Vb()),2&t){const t=n.$implicit;c.qc("value",t),c.Cb(1),c.Lc(" ",t," ")}}function m(t,n){if(1&t&&(c.Wb(0,"option",40),c.Jc(1),c.Vb()),2&t){const t=n.$implicit;c.qc("value",t.code),c.Cb(1),c.Lc(" ",t.code," ")}}function f(t,n){1&t&&(c.Wb(0,"div",41),c.Jc(1," Above field must be strictly Numeric Values. "),c.Vb())}function _(t,n){1&t&&(c.Wb(0,"div",41),c.Jc(1," Above field must be strictly Numeric Values. "),c.Vb())}function h(t,n){if(1&t&&c.Rb(0,"img",42),2&t){const t=c.ic();c.pc("src",t.imgURL,c.Cc)}}const y=function(t){return{error:t}},x=[{path:"",component:(()=>{class t{constructor(t,n,e,o,i,c){this.commonService=t,this.router=n,this.toastr=e,this.fb=o,this.transactionsService=i,this.activeRoute=c,this.topupSubtype=a.p,this.currencies=[],this.submitted=!1,this.getInfo=[],this.organisationAccount=[],this.suppliers=[],this.addFloatingForm=this.fb.group({supplier_data:["",[r.z.required]],agency_iata_num:["",[r.z.pattern("[0-9]*")]],agency_name:[""],agency_country:[""],agency_currency:[""],topup_type:["Deposit"],topup_subtype:["",[r.z.required]],topup_purpose:["Regular Topup"],available_balance:[""],request_no:["",[r.z.pattern("[0-9]*")]],request_initiator:[""],bank_name:[""],bank_account_no:[""],payment_date:["",[r.z.required]],payment_currency:["",[r.z.required]],payment_amount:["",[r.z.required,r.z.pattern("[0-9]*")]],payment_type:["Credit"],attachment:[""],topup_status:[""],bank_charge:[""],bank_charge_currency:[""]})}ngOnInit(){this.getCurrencyList(),this.getOrganisationAccountData(),this.getFloatingSupplierList()}get f(){return this.addFloatingForm.controls}getCurrencyList(){this.commonService.getCurrencyList().subscribe(t=>{this.currencies=t.currencies})}getFloatingSupplierList(){this.commonService.getFloatingSupplierList().subscribe(t=>{"data"==t.type?this.suppliers=t.listData:(this.toastr.error(`${t.msg}`,`${t.msg}`,{timeOut:1e4,progressBar:!1,positionClass:"toast-bottom-right"}),this.suppliers=[])})}getOrganisationAccountData(){this.transactionsService.getOrganisationAccount().subscribe(t=>{"error"!=t.type?(this.organisationAccount=t.data,this.addFloatingForm.patchValue({agency_name:this.organisationAccount.name,available_balance:this.organisationAccount["organisation_account.available_deposit"],agency_country:this.organisationAccount["country.name"],agency_currency:this.organisationAccount["currency.code"],bank_name:this.organisationAccount["currency.code"],bank_account_no:this.organisationAccount["currency.code"]})):this.toastr.error(`${t.msg}`,`${t.msg}`,{timeOut:1e4,progressBar:!1,positionClass:"toast-bottom-right"})})}submitAddFloating(){this.submitted=!0,this.addFloatingForm.invalid||this.transactionsService.addFloatingRequest(this.addFloatingForm.value).subscribe(t=>{"error"!=t.type?(this.toastr.success(`${t.msg}`,`${t.msg}`,{timeOut:1e3,progressBar:!1,positionClass:"toast-bottom-right"}),this.router.navigate(["accounts/transactions"])):this.toastr.error(`${t.msg}`,`${t.msg}`,{timeOut:1e4,progressBar:!1,positionClass:"toast-bottom-right"})})}preview(t){if(0!==t.length)if(null!=t[0].type.match(/image\/*/)){var n=new FileReader;this.imagePath=t,n.readAsDataURL(t[0]),n.onload=t=>{this.imgURL=n.result,this.addFloatingForm.patchValue({attachment:this.imgURL})}}else this.message="Only images are supported."}ngAfterViewInit(){var t=this;$(document).ready((function(){$(".ui.dropdown").dropdown(),$('input[name="payment_date"]').daterangepicker({singleDatePicker:!0,showDropdowns:!0,minYear:1901,autoUpdateInput:!1,maxYear:parseInt(i().format("YYYY"),10)},(function(n,e,o){i().diff(n,"years"),t.addFloatingForm.patchValue({payment_date:i(n).format("YYYY-MM-DD")})}))}))}get payment_amount(){return this.addFloatingForm.get("payment_amount")}get agency_iata_num(){return this.addFloatingForm.get("agency_iata_num")}get request_no(){return this.addFloatingForm.get("request_no")}}return t.\u0275fac=function(n){return new(n||t)(c.Qb(p.a),c.Qb(b.f),c.Qb(s.b),c.Qb(r.f),c.Qb(l.a),c.Qb(b.a))},t.\u0275cmp=c.Kb({type:t,selectors:[["app-floating-deposits"]],decls:130,vars:23,consts:[[1,"booking-header"],[1,"ui","fluid","container"],[1,"outer-basic","result-block"],["enctype","multipart/form-data",1,"ui","form",3,"formGroup","ngSubmit"],[1,"outer-basicForm"],[1,"field"],[1,"five","fields"],[1,"eight","wide","field",3,"ngClass"],[1,"mandatory"],["formControlName","supplier_data",1,"ui","fluid","search","selection","dropdown"],["value","","selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"eight","wide","field"],["type","text","name","agency_iata_num","formControlName","agency_iata_num","placeholder","IATA"],["class","validations",4,"ngIf"],["type","text","name","agencyName","formControlName","agency_name","disabled","","placeholder","Agency Name"],["type","text","name","agencyCountry","formControlName","agency_country","disabled",""],["type","text","name","agencyCountry","formControlName","agency_currency","disabled",""],["type","text","name","availableBalance","formControlName","available_balance","disabled","","placeholder","Availbale Balance"],[1,"fields"],["type","text","name","agencyCountry","formControlName","topup_type","readonly",""],["formControlName","topup_subtype",1,"ui","fluid","search","selection","dropdown"],["type","text","name","topup_purpose","formControlName","topup_purpose","readonly",""],["type","text","name","bankName","formControlName","bank_name","readonly","","placeholder","Bank Name"],["type","text","name","bankAccNumber","formControlName","bank_account_no","readonly","","placeholder","Bank Account Number"],[1,"eight","wide","field","bookings_pickers",3,"ngClass"],[1,"ui","left","icon","input"],["type","text","placeholder","Payment Date","formControlName","payment_date","name","payment_date","value",""],[1,"icon"],["src","./../../../../assets/icons/calendar.svg",1,"bookings_input__placeholder-icon","cal"],["formControlName","payment_currency",1,"ui","fluid","search","selection","dropdown"],["type","text","name","payment_type","formControlName","payment_type","readonly","","placeholder","Payment Type"],["type","text","name","payment_amount","formControlName","payment_amount","placeholder","Payment Amount","name","payment_amount"],["type","text","name","request_no","formControlName","request_no","placeholder","Reference Number"],["type","text","name","request_initiator","formControlName","request_initiator","placeholder","Deposited By"],["type","file","accept","image/*",3,"change"],["file",""],["height","200",3,"src",4,"ngIf"],[1,"sixteen","wide","field","bookings_btn-panel"],[1,"ui","primary","button","float-sub-btn"],[3,"value"],[1,"validations"],["height","200",3,"src"]],template:function(t,n){if(1&t){const t=c.Xb();c.Wb(0,"h3",0),c.Jc(1,"Floating Deposits"),c.Vb(),c.Wb(2,"div",1),c.Wb(3,"div",2),c.Wb(4,"form",3),c.ec("ngSubmit",(function(t){return n.submitAddFloating()})),c.Wb(5,"div",4),c.Wb(6,"div",5),c.Wb(7,"div",6),c.Wb(8,"div",7),c.Wb(9,"label"),c.Jc(10,"Select Supplier"),c.Wb(11,"span",8),c.Jc(12,"*"),c.Vb(),c.Vb(),c.Wb(13,"select",9),c.Wb(14,"option",10),c.Jc(15,"Select Supplier"),c.Vb(),c.Hc(16,u,2,2,"option",11),c.Vb(),c.Vb(),c.Wb(17,"div",12),c.Wb(18,"label"),c.Jc(19,"IATA Number"),c.Vb(),c.Rb(20,"input",13),c.Hc(21,d,2,0,"div",14),c.Vb(),c.Vb(),c.Vb(),c.Wb(22,"div"),c.Wb(23,"div",5),c.Wb(24,"div",6),c.Wb(25,"div",12),c.Wb(26,"label"),c.Jc(27,"Agency Name"),c.Vb(),c.Rb(28,"input",15),c.Vb(),c.Wb(29,"div",12),c.Wb(30,"label"),c.Jc(31,"Agency Country"),c.Vb(),c.Rb(32,"input",16),c.Vb(),c.Vb(),c.Vb(),c.Wb(33,"div",5),c.Wb(34,"div",6),c.Wb(35,"div",12),c.Wb(36,"label"),c.Jc(37,"Availbale Currency"),c.Vb(),c.Rb(38,"input",17),c.Vb(),c.Wb(39,"div",12),c.Wb(40,"label"),c.Jc(41,"Availbale Balance"),c.Vb(),c.Rb(42,"input",18),c.Vb(),c.Vb(),c.Vb(),c.Wb(43,"div",5),c.Wb(44,"div",19),c.Wb(45,"div",12),c.Wb(46,"label"),c.Jc(47,"Floating Deposit Type"),c.Vb(),c.Rb(48,"input",20),c.Vb(),c.Wb(49,"div",7),c.Wb(50,"label"),c.Jc(51,"Floating Deposit Sub Type"),c.Wb(52,"span",8),c.Jc(53,"*"),c.Vb(),c.Vb(),c.Wb(54,"select",21),c.Wb(55,"option",10),c.Jc(56,"Select Sub Type"),c.Vb(),c.Hc(57,g,2,2,"option",11),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(58,"div",5),c.Wb(59,"div",6),c.Wb(60,"div",12),c.Wb(61,"label"),c.Jc(62,"Topup type"),c.Vb(),c.Rb(63,"input",22),c.Vb(),c.Vb(),c.Vb(),c.Wb(64,"div",5),c.Wb(65,"div",6),c.Wb(66,"div",12),c.Wb(67,"label"),c.Jc(68,"Bank Name"),c.Vb(),c.Rb(69,"input",23),c.Vb(),c.Wb(70,"div",12),c.Wb(71,"label"),c.Jc(72,"Bank Account Number"),c.Vb(),c.Rb(73,"input",24),c.Vb(),c.Vb(),c.Vb(),c.Wb(74,"div",5),c.Wb(75,"div",6),c.Wb(76,"div",25),c.Wb(77,"label"),c.Jc(78,"Payment Date"),c.Wb(79,"span",8),c.Jc(80,"*"),c.Vb(),c.Vb(),c.Wb(81,"div",26),c.Rb(82,"input",27),c.Wb(83,"i",28),c.Rb(84,"img",29),c.Vb(),c.Vb(),c.Vb(),c.Wb(85,"div",7),c.Wb(86,"label"),c.Jc(87,"Payment Currency"),c.Wb(88,"span",8),c.Jc(89,"*"),c.Vb(),c.Vb(),c.Wb(90,"select",30),c.Wb(91,"option",10),c.Jc(92,"Payment Currency"),c.Vb(),c.Hc(93,m,2,2,"option",11),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(94,"div",5),c.Wb(95,"div",6),c.Wb(96,"div",12),c.Wb(97,"label"),c.Jc(98,"Payment Type"),c.Vb(),c.Rb(99,"input",31),c.Vb(),c.Wb(100,"div",7),c.Wb(101,"label"),c.Jc(102,"Payment Amount"),c.Wb(103,"span",8),c.Jc(104,"*"),c.Vb(),c.Vb(),c.Rb(105,"input",32),c.Hc(106,f,2,0,"div",14),c.Vb(),c.Vb(),c.Vb(),c.Wb(107,"div",5),c.Wb(108,"div",6),c.Wb(109,"div",12),c.Wb(110,"label"),c.Jc(111,"Reference Number"),c.Vb(),c.Rb(112,"input",33),c.Hc(113,_,2,0,"div",14),c.Vb(),c.Wb(114,"div",12),c.Wb(115,"label"),c.Jc(116,"Deposited By"),c.Vb(),c.Rb(117,"input",34),c.Vb(),c.Vb(),c.Vb(),c.Wb(118,"div",5),c.Wb(119,"div",19),c.Wb(120,"div",12),c.Wb(121,"label"),c.Jc(122,"Document Reference"),c.Vb(),c.Wb(123,"input",35,36),c.ec("change",(function(e){c.Ac(t);const o=c.yc(124);return n.preview(o.files)})),c.Vb(),c.Hc(125,h,1,1,"img",37),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(126,"div",19),c.Wb(127,"div",38),c.Wb(128,"button",39),c.Jc(129," Submit "),c.Vb(),c.Vb(),c.Vb(),c.Vb()}2&t&&(c.Cb(4),c.pc("formGroup",n.addFloatingForm),c.Cb(4),c.pc("ngClass",c.uc(13,y,n.submitted&&n.f.supplier_data.errors&&n.f.supplier_data.errors.required)),c.Cb(8),c.pc("ngForOf",n.suppliers),c.Cb(5),c.pc("ngIf",null==n.agency_iata_num.errors?null:n.agency_iata_num.errors.pattern),c.Cb(28),c.pc("ngClass",c.uc(15,y,n.submitted&&n.f.topup_subtype.errors&&n.f.topup_subtype.errors.required)),c.Cb(8),c.pc("ngForOf",n.topupSubtype),c.Cb(19),c.pc("ngClass",c.uc(17,y,n.submitted&&n.f.payment_date.errors&&n.f.payment_date.errors.required)),c.Cb(9),c.pc("ngClass",c.uc(19,y,n.submitted&&n.f.payment_currency.errors&&n.f.payment_currency.errors.required)),c.Cb(8),c.pc("ngForOf",n.currencies),c.Cb(7),c.pc("ngClass",c.uc(21,y,n.submitted&&n.f.payment_amount.errors&&n.f.payment_amount.errors.required)),c.Cb(6),c.pc("ngIf",null==n.payment_amount.errors?null:n.payment_amount.errors.pattern),c.Cb(7),c.pc("ngIf",null==n.request_no.errors?null:n.request_no.errors.pattern),c.Cb(12),c.pc("ngIf",n.imgURL))},directives:[r.B,r.p,r.i,o.n,r.x,r.o,r.h,r.s,r.A,o.o,r.c,o.p],styles:[".outer-segment[_ngcontent-%COMP%]{margin:0 20px 0 15px}.user_title[_ngcontent-%COMP%]{margin:0;color:#4f4f4f;font-size:20px;font-weight:200;line-height:22px}.ui.top.attached.tabular.menu[_ngcontent-%COMP%]{margin-top:25px}.ui.header[_ngcontent-%COMP%]{color:#4f4f4f;font-family:Roboto,sans-serif;font-size:13px;font-weight:600!important;line-height:15px}.ui.top.attached.menu[_ngcontent-%COMP%] > .item[_ngcontent-%COMP%]{border-radius:.28571429rem 0 0 0;border-top-right-radius:15px!important}.ui.bottom.attached.active.tab.segment[_ngcontent-%COMP%]{border-bottom-left-radius:17px;border-bottom-right-radius:17px;border-top-right-radius:17px}.create_tab_title.corporate_staff[_ngcontent-%COMP%]{color:#4f4f4f;font-family:Roboto,sans-serif;font-size:13px;font-weight:500;line-height:15px;text-align:center}.tab.segment[_ngcontent-%COMP%]{box-shadow:3px 3px 4px 0 rgba(0,0,0,.4)}.outer-form[_ngcontent-%COMP%], .outer_corpForm[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:5px;border:.5px solid grey;margin:45px 32px 111px 25px}.ui.form.b2b_basic_form[_ngcontent-%COMP%], .ui.form.corp_form[_ngcontent-%COMP%]{margin:17px 23px 25px 22px}hr[_ngcontent-%COMP%]{box-sizing:border-box;overflow:visible;border:.5px solid #e0e0e0}.add_btn[_ngcontent-%COMP%]{color:#fff;font-family:Roboto,sans-serif;font-size:13px;margin:20px;font-weight:500;line-height:15px}input[_ngcontent-%COMP%]{box-shadow:inset 0 1px 3px 0 rgba(0,0,0,.2);font-family:Lato,Helvetica Neue,Arial,Helvetica,sans-serif}.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{font-size:14px}.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{font-size:14px}.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{font-size:14px}.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{font-size:14px}.dropdown[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:12px}.create_btn[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:3px;background-color:#3867b1;border:1px solid #fff;box-shadow:inset 0 1px 34px 0 rgba(0,0,0,.5),0 1px 1px 0 rgba(0,0,0,.5);padding-right:35px;position:relative;right:30px;bottom:104px}.create_text[_ngcontent-%COMP%]{color:#fff;font-family:Roboto,sans-serif;font-size:13px;font-weight:500;line-height:15px;padding-left:10px}.corporate_input__placeholder-icon[_ngcontent-%COMP%]{position:relative;width:18px;bottom:28px;left:9px}div.upload[_ngcontent-%COMP%]{box-sizing:border-box;height:15px;width:123px;border-radius:3px;background-color:#fff;border:.5px solid grey;margin-top:-25px;box-shadow:0 .25px .1px 0 rgba(0,0,0,.5)}div.upload[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:block!important;width:123px!important;height:15px!important;opacity:0!important;overflow:hidden!important}.no_choosen[_ngcontent-%COMP%]{height:10px;width:46px;left:132px;bottom:20px}.file_choose[_ngcontent-%COMP%], .no_choosen[_ngcontent-%COMP%]{color:#4f4f4f;font-family:Roboto,sans-serif;font-size:9px;position:relative;line-height:10px}.file_choose[_ngcontent-%COMP%]{left:31px;bottom:10px}.docuButton[_ngcontent-%COMP%]{height:30px;width:409px;background-color:#dfeafb}.subdivbutton[_ngcontent-%COMP%]{padding-left:1vh;padding-top:.5vh}.docuButtonSub[_ngcontent-%COMP%]{background-color:#fff;width:15vh}i[_ngcontent-%COMP%]{color:#4f4f4f}.booking-header[_ngcontent-%COMP%]{font-style:normal;font-weight:700!important;font-size:20px;line-height:23px;color:#181b20;margin:24px auto 0;padding-left:24px}.outer-basic[_ngcontent-%COMP%]{background-color:#fff;box-shadow:3px 1px 4px 0 rgba(0,0,0,.4);border-radius:20px}.outer-basicForm[_ngcontent-%COMP%]{width:100%;height:auto}.containerBox[_ngcontent-%COMP%]{box-sizing:border-box;height:423px;width:1065px;border-radius:5px;border:.5px solid grey}h4[_ngcontent-%COMP%]{height:17px;width:223px;color:#4f4f4f;font-family:Roboto,sans-serif;font-size:15px;font-weight:500;line-height:17px}.bookings_pickers[_ngcontent-%COMP%]   .input.bookings_datepicker[_ngcontent-%COMP%]{min-width:120px;max-width:138px}.bookings_pickers[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .ui.basic.floating.button[_ngcontent-%COMP%]{padding:10px!important;color:hsla(0,0%,59.6%,.6)!important;font-weight:300!important;line-height:11px}.bookings_pickers[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{opacity:1;z-index:1}.bookings_pickers[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .bookings_input__placeholder-icon[_ngcontent-%COMP%]{width:24px;margin-top:6px}.bookings_pickers[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .bookings_input__placeholder-icon.cal[_ngcontent-%COMP%]{width:18px;margin-top:10px}.bookings_pickers[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .search.dropdown[_ngcontent-%COMP%]{width:218px;border-right:0;border-top-left-radius:5px;border-bottom-left-radius:5px}.bookings_pickers[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .search.dropdown[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{margin-left:42px!important}.bookings_pickers[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .search.dropdown[_ngcontent-%COMP%]   .default.text[_ngcontent-%COMP%]{font-size:12px;margin-right:0!important;padding:8px 0 0 38px!important}.ui.fluid.container[_ngcontent-%COMP%]{padding:28px}.inputfile[_ngcontent-%COMP%]{opacity:0;overflow:hidden}.validations[_ngcontent-%COMP%]{color:red;font-size:x-small}.ui.form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{font-style:normal;font-weight:500;font-size:13px;line-height:13px;color:#181b20;margin:0 0 10px}.field[_ngcontent-%COMP%]{margin-bottom:12px!important}.ui.fluid.container[_ngcontent-%COMP%]{padding:0!important;background:none}.ui.fluid.container[_ngcontent-%COMP%]   .bookings_btn-panel[_ngcontent-%COMP%]{text-align:right;padding:0 24px}.ui.fluid.container[_ngcontent-%COMP%]   .bookings_btn-panel[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{margin-right:0}@media(max-width:1440px){.booking-header[_ngcontent-%COMP%]{padding-left:24px}}@media(max-width:1280px){.booking-header[_ngcontent-%COMP%]{padding-left:20px}}"]}),t})()}];let C=(()=>{class t{}return t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({factory:function(n){return new(n||t)},imports:[[b.j.forChild(x)],b.j]}),t})();e.d(n,"FloatingDepositsModule",(function(){return v}));let v=(()=>{class t{}return t.\u0275mod=c.Ob({type:t}),t.\u0275inj=c.Nb({factory:function(n){return new(n||t)},imports:[[o.c,C,r.v,r.k]]}),t})()}}]);