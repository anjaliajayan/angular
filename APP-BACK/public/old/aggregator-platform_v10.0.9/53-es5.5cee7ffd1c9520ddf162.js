function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{hXbj:function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),i=n("3Pt+"),a=n("lDzL"),r=n("fXoL"),c=n("8laU"),s=n("5eHb"),d=n("tyNb");function b(t,e){if(1&t&&(r.Wb(0,"option",38),r.Jc(1),r.Vb()),2&t){var n=e.$implicit;r.qc("value",n),r.Cb(1),r.Lc("",n," ")}}function l(t,e){if(1&t&&(r.Wb(0,"option",38),r.Jc(1),r.Vb()),2&t){var n=e.$implicit;r.qc("value",n),r.Cb(1),r.Lc("",n," ")}}function u(t,e){if(1&t&&(r.Wb(0,"option",38),r.Jc(1),r.Vb()),2&t){var n=e.$implicit;r.qc("value",n),r.Cb(1),r.Lc("",n," ")}}function p(t,e){1&t&&(r.Wb(0,"div",39),r.Wb(1,"div",40),r.Jc(2,"Audit Log"),r.Vb(),r.Vb())}function g(t,e){1&t&&(r.Jc(0),r.jc(1,"date")),2&t&&r.Lc("",r.lc(1,1,e.value,"dd/MM/yyyy")," ")}var m=function(){return{prop:"created_at",dir:"desc"}},f=function(t){return[t]};function h(t,e){if(1&t&&(r.Wb(0,"div",43),r.Wb(1,"ngx-datatable",44,45),r.Rb(3,"ngx-datatable-column",46),r.Rb(4,"ngx-datatable-column",47),r.Rb(5,"ngx-datatable-column",48),r.Rb(6,"ngx-datatable-column",49),r.Rb(7,"ngx-datatable-column",50),r.Wb(8,"ngx-datatable-column",51),r.Hc(9,g,2,4,"ng-template",52),r.Vb(),r.Vb(),r.Vb()),2&t){var n=r.ic(2);r.Cb(1),r.pc("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto")("limit",10)("rows",n.NewAuditTrail)("sortType","multi")("reorderable",!0)("sorts",r.uc(10,f,r.tc(9,m)))}}function _(t,e){if(1&t&&(r.Wb(0,"div",41),r.Hc(1,h,10,12,"div",42),r.Vb()),2&t){var n=r.ic();r.Cb(1),r.pc("ngIf",n.showAuditReportTable)}}function v(t,e){1&t&&(r.Wb(0,"div",54),r.Wb(1,"div",55),r.Wb(2,"div",56),r.Jc(3,"Loading Report ..."),r.Vb(),r.Vb(),r.Rb(4,"p"),r.Vb())}function C(t,e){if(1&t&&(r.Wb(0,"div",41),r.Hc(1,v,5,0,"div",53),r.Vb()),2&t){var n=r.ic();r.Cb(1),r.pc("ngIf",n.bookingsLoader)}}var O,M,P=function(t){return{error:t}},k=[{path:"",component:(O=function(){function t(e,n,o){var a=this;_classCallCheck(this,t),this.fb=e,this.newReportService=n,this.toastr=o,this.NewAuditTrail=[],this.totalAuditTrail=0,this.platforms=[],this.modules=[],this.events=[],this.pages=0,this.limit=15,this.pageIndex=1,this.showAuditReportTable=!1,this.submitted=!1,this.newAuditObj={},this.bookingsLoader=!1,this.auditTrailForm=this.fb.group({selectPlatform:[""],selectModule:[""],selectEvent:[""],auditEndDate:["",[i.z.required]],auditStartDate:["",[i.z.required]]}),this.loadStartDate=function(){var t=a;$((function(){$('input[name="auditStartDate"]').daterangepicker({singleDatePicker:!0,showDropdowns:!0,minYear:1901,startDate:moment(),maxDate:moment(),autoUpdateInput:!1},(function(e,n,o){moment().diff(e,"years"),t.auditTrailForm.get("auditStartDate").setValue(moment(e).format("YYYY-MM-DD"))}))}))},this.loadEndDate=function(){var t=a;$((function(){$('input[name="auditEndDate"]').daterangepicker({singleDatePicker:!0,showDropdowns:!0,minYear:1901,startDate:moment(),minDate:moment(),autoUpdateInput:!1},(function(e,n,o){moment().diff(e,"years"),t.auditTrailForm.get("auditEndDate").setValue(moment(e).format("YYYY-MM-DD"))}))}))},this.auditReportView=function(){a.bookingsLoader=!0,a.submitted=!0,a.auditTrailForm.invalid||(a.newAuditObj.platform=a.auditTrailForm.get("selectPlatform").value,a.newAuditObj.module=a.auditTrailForm.get("selectModule").value,a.newAuditObj.event=a.auditTrailForm.get("selectEvent").value,a.newAuditObj.start_date=a.auditTrailForm.get("auditStartDate").value,a.newAuditObj.end_date=a.auditTrailForm.get("auditEndDate").value,a.newReportService.GetAllAuditTrail(a.newAuditObj).subscribe((function(t){t.status?(a.bookingsLoader=!1,a.NewAuditTrail=t.result,0!=t.result.length?(a.NewAuditTrail=t.result,a.showAuditReportTable=!0):(a.bookingsLoader=!1,a.toastr.info("There is no data Available to display","".concat(t.message),{timeOut:2e3,progressBar:!1,positionClass:"toast-bottom-right"}))):a.toastr.error("".concat(t.message),"",{timeOut:2e3,progressBar:!1,positionClass:"toast-bottom-right"})})))},this.reset=function(){a.bookingsLoader=!1,a.auditTrailForm.reset(),$(".ui.dropdown").dropdown("clear"),a.showAuditReportTable=!1}}return _createClass(t,[{key:"ngOnInit",value:function(){this.fetchAllAuditTrail()}},{key:"ngAfterViewInit",value:function(){$(document).ready((function(){$(".menu .item").tab(),$(".ui.dropdown").dropdown()})),this.loadEndDate(),this.loadStartDate()}},{key:"fetchAllAuditTrail",value:function(){var t=this;this.bookingsLoader=!0,this.newReportService.GetAllAuditTrail({page:0}).subscribe((function(e){t.bookingsLoader=!1,t.NewAuditTrail=e.result,e.status?0!=e.result.length?e.result.forEach((function(e){if(null!=e.platform){var n=t.platforms.findIndex((function(t){return t==e.platform})),o=t.modules.findIndex((function(t){return t==e.module})),i=t.events.findIndex((function(t){return t==e.event}));-1==n&&t.platforms.push(e.platform),-1==o&&t.modules.push(e.module),-1==i&&t.events.push(e.event)}})):(t.bookingsLoader=!1,t.toastr.info("There is no data available","",{timeOut:5e3,progressBar:!1,positionClass:"toast-bottom-right"})):(t.bookingsLoader=!1,t.toastr.error("".concat(e.message),"",{timeOut:5e3,progressBar:!1,positionClass:"toast-bottom-right"}))}))}},{key:"f",get:function(){return this.auditTrailForm.controls}}]),t}(),O.\u0275fac=function(t){return new(t||O)(r.Qb(i.f),r.Qb(c.a),r.Qb(s.b))},O.\u0275cmp=r.Kb({type:O,selectors:[["app-audit-report"]],decls:76,vars:13,consts:[[1,"ui","top","attached","tabular","menu"],["data-tab","first","routerLink","/report/booking-report",1,"item"],["data-tab","second","routerLink","/report/segment-report",1,"item"],["data-tab","third","routerLink","/report/mis-report",1,"item"],["data-tab","fourth","routerLink","/report/search-log-report",1,"item"],["data-tab","fifth","routerLink","/report/audit-report",1,"item","active"],["data-tab","sixth","routerLink","/report/ticket-report",1,"item"],["data-tab","seventh","routerLink","/report/dynamic-report",1,"item"],["data-tab","fifth",1,"ui","bottom","attached","tab","segment","tabContent-block","active"],[1,"ui","segment"],[1,"ui","fluid","container"],[1,"outer-basics"],[1,"ui","form","report-form",3,"formGroup","ngSubmit"],["Form","ngForm"],[1,"field"],[1,"outer-basicForm"],[1,"form-inner"],[1,"fields"],[1,"five","wide","field"],["formControlName","selectPlatform",1,"ui","fluid","search","dropdown"],["value",""],["class","item",3,"value",4,"ngFor","ngForOf"],["formControlName","selectModule",1,"ui","fluid","search","dropdown"],[1,"four","wide","field"],["formControlName","selectEvent",1,"ui","fluid","search","dropdown"],[1,"five","wide","field","bookings_pickers",3,"ngClass"],[1,"mandatory"],[1,"ui","left","icon","input"],["type","text","placeholder","Start Date","formControlName","auditStartDate","name","auditStartDate","value","","required",""],[1,"icon"],["src","./../../../../assets/icons/calendar.svg",1,"bookings_input__placeholder-icon","cal"],["type","text","placeholder","End Date","formControlName","auditEndDate","name","auditEndDate","value","","required",""],[1,"bookings_btn-panel"],["title","Reset",1,"ui","primary","reset","button",3,"click"],[1,"undo","icon"],[1,"ui","primary","button"],["class","fields agent-name-booking",4,"ngIf"],["class","result-block",4,"ngIf"],[1,"item",3,"value"],[1,"fields","agent-name-booking"],[1,"eight","wide","field","ui","small","header"],[1,"result-block"],["class","user-table-list b2c-list-user-table",4,"ngIf"],[1,"user-table-list","b2c-list-user-table"],[1,"table",3,"columnMode","headerHeight","footerHeight","rowHeight","limit","rows","sortType","reorderable","sorts"],["table",""],["name","IP Address","prop","browser_ip"],["name","Platform","prop","platform"],["name","Module","prop","module"],["name","Event","prop","event"],["name","Description","prop","description"],["name","Date","prop","created_at"],["ngx-datatable-cell-template",""],["class","ui segment b2c-list-user-table__segment-loader",4,"ngIf"],[1,"ui","segment","b2c-list-user-table__segment-loader"],[1,"ui","active","inverted","dimmer"],[1,"ui","text","loader"]],template:function(t,e){1&t&&(r.Wb(0,"div",0),r.Wb(1,"div",1),r.Jc(2," Booking "),r.Vb(),r.Wb(3,"div",2),r.Jc(4,"Segment"),r.Vb(),r.Wb(5,"div",3),r.Jc(6,"MIS"),r.Vb(),r.Wb(7,"div",4),r.Jc(8,"Search Log"),r.Vb(),r.Wb(9,"div",5),r.Jc(10,"Audit Trail Log"),r.Vb(),r.Wb(11,"div",6),r.Jc(12,"Ticket"),r.Vb(),r.Wb(13,"div",7),r.Jc(14,"Dynamic Report"),r.Vb(),r.Vb(),r.Wb(15,"div",8),r.Wb(16,"div",9),r.Wb(17,"div",10),r.Wb(18,"div",11),r.Wb(19,"form",12,13),r.ec("ngSubmit",(function(t){return e.auditReportView()})),r.Wb(21,"div",14),r.Wb(22,"div",15),r.Wb(23,"div",16),r.Wb(24,"div",17),r.Wb(25,"div",18),r.Wb(26,"label"),r.Jc(27,"Platform"),r.Vb(),r.Wb(28,"select",19),r.Wb(29,"option",20),r.Jc(30,"Platform"),r.Vb(),r.Wb(31,"option",20),r.Jc(32,"Platform"),r.Vb(),r.Hc(33,b,2,2,"option",21),r.Vb(),r.Vb(),r.Wb(34,"div",18),r.Wb(35,"label"),r.Jc(36,"Module"),r.Vb(),r.Wb(37,"select",22),r.Wb(38,"option",20),r.Jc(39,"Module"),r.Vb(),r.Hc(40,l,2,2,"option",21),r.Vb(),r.Vb(),r.Wb(41,"div",23),r.Wb(42,"label"),r.Jc(43,"Events"),r.Vb(),r.Wb(44,"select",24),r.Wb(45,"option",20),r.Jc(46,"Events"),r.Vb(),r.Hc(47,u,2,2,"option",21),r.Vb(),r.Vb(),r.Vb(),r.Wb(48,"div",17),r.Wb(49,"div",25),r.Wb(50,"label"),r.Jc(51,"Start Date"),r.Wb(52,"span",26),r.Jc(53,"*"),r.Vb(),r.Vb(),r.Wb(54,"div",27),r.Rb(55,"input",28),r.Wb(56,"i",29),r.Rb(57,"img",30),r.Vb(),r.Vb(),r.Vb(),r.Wb(58,"div",25),r.Wb(59,"label"),r.Jc(60,"End Date"),r.Wb(61,"span",26),r.Jc(62,"*"),r.Vb(),r.Vb(),r.Wb(63,"div",27),r.Rb(64,"input",31),r.Wb(65,"i",29),r.Rb(66,"img",30),r.Vb(),r.Vb(),r.Vb(),r.Wb(67,"div",18),r.Wb(68,"div",32),r.Wb(69,"button",33),r.ec("click",(function(t){return e.reset()})),r.Rb(70,"i",34),r.Vb(),r.Wb(71,"button",35),r.Jc(72," Search "),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Hc(73,p,3,0,"div",36),r.Hc(74,_,2,1,"div",37),r.Hc(75,C,2,1,"div",37),r.Vb(),r.Vb(),r.Vb(),r.Vb()),2&t&&(r.Cb(19),r.pc("formGroup",e.auditTrailForm),r.Cb(14),r.pc("ngForOf",e.platforms),r.Cb(7),r.pc("ngForOf",e.modules),r.Cb(7),r.pc("ngForOf",e.events),r.Cb(2),r.pc("ngClass",r.uc(9,P,e.submitted&&e.f.auditStartDate.errors&&e.f.auditStartDate.errors.required)),r.Cb(9),r.pc("ngClass",r.uc(11,P,e.submitted&&e.f.auditEndDate.errors&&e.f.auditEndDate.errors.required)),r.Cb(15),r.pc("ngIf",e.showAuditReportTable),r.Cb(1),r.pc("ngIf",e.showAuditReportTable),r.Cb(1),r.pc("ngIf",e.bookingsLoader))},directives:[d.g,i.B,i.p,i.i,i.x,i.o,i.h,i.s,i.A,o.o,o.n,i.c,i.w,o.p,a.c,a.b,a.a],pipes:[o.f],styles:[".bookings_btn-panel[_ngcontent-%COMP%]{padding:20px 2px}.bookings_pickers[_ngcontent-%COMP%]   .input.bookings_datepicker[_ngcontent-%COMP%]{min-width:120px;max-width:138px}.bookings_pickers[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .ui.basic.floating.button[_ngcontent-%COMP%]{padding:10px!important;color:hsla(0,0%,59.6%,.6)!important;font-weight:300!important;line-height:11px}.bookings_pickers[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{opacity:1;z-index:100}.bookings_pickers[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .bookings_input__placeholder-icon[_ngcontent-%COMP%]{width:24px;margin-top:6px}.bookings_pickers[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .bookings_input__placeholder-icon.cal[_ngcontent-%COMP%]{width:18px;margin-top:10px}.bookings_pickers[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .search.dropdown[_ngcontent-%COMP%]{width:218px;border-right:0;border-top-left-radius:5px;border-bottom-left-radius:5px}.bookings_pickers[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .search.dropdown[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{margin-left:42px!important}.bookings_pickers[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .search.dropdown[_ngcontent-%COMP%]   .default.text[_ngcontent-%COMP%]{font-size:12px;margin-right:0!important;padding:8px 0 0 38px!important}.user-table-list.b2c-list-user-table[_ngcontent-%COMP%]{margin-top:16px}.tab.segment[_ngcontent-%COMP%]{box-shadow:3px 3px 4px 0 rgba(0,0,0,.4)}.ui.top.attached.tabular.menu[_ngcontent-%COMP%]{margin-top:25px}.ui.bottom.attached.active.tab.segment[_ngcontent-%COMP%]{border-bottom-left-radius:17px;border-bottom-right-radius:17px;border-top-right-radius:17px}.ui.top.attached.menu[_ngcontent-%COMP%] > .item[_ngcontent-%COMP%]{border-radius:.28571429rem 0 0 0;border-top-right-radius:15px!important}.audit-trail-header[_ngcontent-%COMP%]{position:relative;left:32%;color:rgba(0,0,0,.48);font-family:Roboto,sans-serif;font-weight:200}.b2c-list-user-table__segment-loader[_ngcontent-%COMP%]{height:450px;background-color:#fff!important;border:0;box-shadow:none;margin-top:10px}.b2c-list-user-table__segment-loader[_ngcontent-%COMP%]   .ui.inverted.dimmer[_ngcontent-%COMP%]{background-color:#fff!important}.b2c-list-user-table__segment-loader[_ngcontent-%COMP%]   .eye-icon[_ngcontent-%COMP%]{font-size:12px;color:#3867b1}.ui.form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-style:normal;font-weight:500;font-size:13px;line-height:13px;color:#181b20;margin:0 0 8px}.eight.field.bookings_btn-panel[_ngcontent-%COMP%]{padding:0;text-align:right}.agent-name-booking[_ngcontent-%COMP%]{margin:auto 24px!important}.agent-name-booking[_ngcontent-%COMP%]   .eight.wide.field[_ngcontent-%COMP%]{padding:0}.agent-name-booking[_ngcontent-%COMP%]   .eight.wide.field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:0}.five.wide.field[_ngcontent-%COMP%]{padding-bottom:16px}.ui.attached.segment.tabContent-block[_ngcontent-%COMP%]   .ui.segment[_ngcontent-%COMP%]   .report-form[_ngcontent-%COMP%]{padding:24px;margin-bottom:24px}.ui.attached.segment.tabContent-block[_ngcontent-%COMP%]   .ui.segment[_ngcontent-%COMP%]   .report-form[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]:last-child{margin-bottom:0}.ui.attached.segment.tabContent-block[_ngcontent-%COMP%]   .ui.segment[_ngcontent-%COMP%]   .report-form[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]:last-child   .five.wide.field[_ngcontent-%COMP%]{padding-bottom:0}.ui.top.attached.tabular.menu[_ngcontent-%COMP%]{margin:24px 0}.bookings_btn-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 6px}"]}),O)}],w=((M=function t(){_classCallCheck(this,t)}).\u0275mod=r.Ob({type:M}),M.\u0275inj=r.Nb({factory:function(t){return new(t||M)},imports:[[d.j.forChild(k)],d.j]}),M);n.d(e,"AuditReportModule",(function(){return x}));var V,x=((V=function t(){_classCallCheck(this,t)}).\u0275mod=r.Ob({type:V}),V.\u0275inj=r.Nb({factory:function(t){return new(t||V)},imports:[[o.c,i.v,i.k,a.d,w]]}),V)}}]);