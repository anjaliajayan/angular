function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"9X21":function(e,t,r){"use strict";r.r(t);var n=r("ofXK"),o=r("3Pt+"),i=r("lM/l"),s=r("fXoL"),a=r("5eHb"),c=r("tyNb"),d=r("HTQm"),l=r("7o2P");function u(e,t){if(1&e&&(s.Wb(0,"option",33),s.Jc(1),s.Vb()),2&e){var r=t.$implicit,n=s.ic();s.qc("value",r),s.pc("selected",r==n.updateProfileForm.value.salute),s.Cb(1),s.Kc(r)}}function b(e,t){1&e&&(s.Wb(0,"div",34),s.Jc(1," First Name is required "),s.Vb())}function f(e,t){if(1&e&&(s.Wb(0,"div",34),s.Hc(1,b,2,0,"div",14),s.Vb()),2&e){var r=s.ic();s.Cb(1),s.pc("ngIf",null==r.first_name.errors?null:r.first_name.errors.required)}}function p(e,t){1&e&&(s.Wb(0,"div",34),s.Jc(1," Last Name is required "),s.Vb())}function m(e,t){if(1&e&&(s.Wb(0,"div",34),s.Hc(1,p,2,0,"div",14),s.Vb()),2&e){var r=s.ic();s.Cb(1),s.pc("ngIf",null==r.last_name.errors?null:r.last_name.errors.required)}}function g(e,t){1&e&&(s.Wb(0,"div",34),s.Jc(1," Contact Number must be valid "),s.Vb())}function _(e,t){1&e&&(s.Wb(0,"div",34),s.Jc(1," Contact Number is required "),s.Vb())}function v(e,t){if(1&e&&(s.Wb(0,"div",34),s.Hc(1,g,2,0,"div",14),s.Hc(2,_,2,0,"div",14),s.Vb()),2&e){var r=s.ic();s.Cb(1),s.pc("ngIf",null==r.mobile.errors?null:r.mobile.errors.pattern),s.Cb(1),s.pc("ngIf",null==r.mobile.errors?null:r.mobile.errors.required)}}function h(e,t){1&e&&(s.Wb(0,"div",34),s.Jc(1," Address is required "),s.Vb())}function C(e,t){if(1&e&&(s.Wb(0,"div",34),s.Hc(1,h,2,0,"div",14),s.Vb()),2&e){var r=s.ic();s.Cb(1),s.pc("ngIf",null==r.address_1.errors?null:r.address_1.errors.required)}}function P(e,t){if(1&e&&(s.Wb(0,"option",33),s.Jc(1),s.Vb()),2&e){var r=t.$implicit,n=s.ic();s.qc("selected",n.userInfo.country_id==r.Numeric_code?"selected":""),s.qc("value",r.country_id),s.Cb(1),s.Lc(" ",r.country,"")}}var w,y,V=function(e){return{error:e}},W=[{path:"",component:(w=function(){function e(t,r,n,o,s){_classCallCheck(this,e),this.fb=t,this.toastr=r,this.router=n,this.userRoleService=o,this.commonService=s,this.submitted=!1,this.userInfo={},this.saluteNames=i.k}return _createClass(e,[{key:"createForm",value:function(){this.updateProfileForm=this.fb.group({salute:["Mr."],first_name:["",o.z.required],last_name:["",o.z.required],mobile:["",[o.z.required,o.z.pattern("[0-9]*")]],email:["",[o.z.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],old_password:[""],password:[""],password_confirmation:[""],address_1:["",o.z.required],address_2:[""],country_id:["",o.z.required]},{})}},{key:"validateEmailNotTaken",value:function(e){return this.userRoleService.matchOldPassword(e.value).subscribe((function(e){return console.log("---res---",e),e?null:{emailTaken:!0}}))}},{key:"countryList",value:function(){var e=this;this.commonService.getCountryList().subscribe((function(t){e.countries=t.countries}))}},{key:"ngOnInit",value:function(){this.getUserInfo(),this.countryList(),this.createForm()}},{key:"getUserInfo",value:function(){var e=this;this.userRoleService.getLogedInUser().subscribe((function(t){e.userInfo=t.data,console.log("---this.userInfo-----",e.userInfo);var r=e.userInfo,n=r.salute,o=r.first_name,i=r.last_name,s=r.email,a=r.address_1,c=r.address_2,d=r.country_id,l=r.mobile;e.updateProfileForm.patchValue({salute:n,first_name:o,last_name:i,email:s,address_1:a,address_2:c,country_id:d,mobile:l})}))}},{key:"checkPasswords",value:function(e,t){var r=e.get("password").value,n=e.get("old_password").value;if(null!=n&&null!=r){var o=e.get("password_confirmation").value;return this.userRoleService.matchOldPassword(n).subscribe((function(e){console.log("---matchPass",e)})),r===o?null:{notSame:!0}}return null}},{key:"onSubmit",value:function(){var e=this;this.submitted=!0,this.updateProfileForm.invalid||this.userRoleService.updateLogedInUser(this.updateProfileForm.value).subscribe((function(t){"error"==t.type?e.toastr.error("".concat(t.msg),"".concat(t.msg),{timeOut:1e4,progressBar:!1,positionClass:"toast-bottom-right"}):(e.toastr.info("".concat(t.msg),"".concat(t.msg),{timeOut:1e4,progressBar:!1,positionClass:"toast-bottom-right"}),e.router.navigate(["user-role-management/list-user"]))}))}},{key:"requiredPassword",value:function(){var e=this.old_password,t=this.password,r=this.password_confirmation;e.dirty&&(e.value?(t.setErrors({required:!0}),r.setErrors({required:!0})):(t.setErrors(null),r.setErrors(null)))}},{key:"validatePassword",value:function(){var e=this.password,t=this.password_confirmation;if(t.dirty){var r=e.value!==t.value;t.errors?r?t.errors.unmatched=!0:(delete t.errors.unmatched,0===Object.keys(t.errors).length&&t.setErrors(null)):r&&t.setErrors({unmatched:!0})}}},{key:"ngAfterViewInit",value:function(){$(document).ready((function(){$(".ui.dropdown").dropdown(),$(".test.checkbox").checkbox("attach events",".toggle.button")}))}},{key:"f",get:function(){return this.updateProfileForm.controls}},{key:"old_password",get:function(){return this.updateProfileForm.get("old_password")}},{key:"password",get:function(){return this.updateProfileForm.get("password")}},{key:"password_confirmation",get:function(){return this.updateProfileForm.get("password_confirmation")}},{key:"first_name",get:function(){return this.updateProfileForm.get("first_name")}},{key:"last_name",get:function(){return this.updateProfileForm.get("last_name")}},{key:"mobile",get:function(){return this.updateProfileForm.get("mobile")}},{key:"address_1",get:function(){return this.updateProfileForm.get("address_1")}}]),e}(),w.\u0275fac=function(e){return new(e||w)(s.Qb(o.f),s.Qb(a.b),s.Qb(c.f),s.Qb(d.a),s.Qb(l.a))},w.\u0275cmp=s.Kb({type:w,selectors:[["app-update-profile"]],decls:92,vars:31,consts:[[1,"ui","fluid","container"],[1,"update-header"],[1,"outer-basic"],[1,"outer-basicForm"],[1,"ui","form",3,"formGroup","ngSubmit"],[1,"form-inner"],[1,"field"],[1,"five","fields"],[1,"one","wide","field"],["formControlName","salute",1,"ui","fluid","dropdown"],[3,"selected","value",4,"ngFor","ngForOf"],[1,"four","wide","field",3,"ngClass"],[1,"mandatory"],["type","text","formControlName","first_name","placeholder","First Name"],["class","validations",4,"ngIf"],[1,"five","wide","field",3,"ngClass"],["type","text","formControlName","last_name","placeholder","Last Name"],[1,"fields"],[1,"five","wide","field"],[1,"disabled","field"],["type","email","formControlName","email","placeholder","Email"],["type","text","formControlName","mobile","placeholder","Contact number"],["type","text","formControlName","address_1","placeholder","Street Address"],["type","text","formControlName","address_2","placeholder","Apartment Address"],["formControlName","country_id",1,"ui","search","dropdown"],["value",""],["type","password","formControlName","old_password","placeholder","Old password",3,"keyup","change"],[1,"fa","fa-exclamation-circle","tooltip"],[1,"tooltiptext"],["type","password","name","password","formControlName","password","placeholder","New Password",3,"keyup","change"],["type","password","formControlName","password_confirmation","placeholder","Confirm Password",3,"keyup","change"],[1,"bookings_btn-panel"],[1,"ui","primary","button"],[3,"selected","value"],[1,"validations"]],template:function(e,t){1&e&&(s.Wb(0,"div",0),s.Wb(1,"h3"),s.Wb(2,"span",1),s.Jc(3,"Update Profile"),s.Vb(),s.Vb(),s.Vb(),s.Wb(4,"div",0),s.Wb(5,"div",2),s.Wb(6,"div",3),s.Wb(7,"form",4),s.ec("ngSubmit",(function(e){return t.onSubmit()})),s.Wb(8,"div",5),s.Wb(9,"div",6),s.Wb(10,"div",7),s.Wb(11,"div",8),s.Wb(12,"label"),s.Jc(13,"Title"),s.Vb(),s.Wb(14,"select",9),s.Hc(15,u,2,3,"option",10),s.Vb(),s.Vb(),s.Wb(16,"div",11),s.Wb(17,"label"),s.Jc(18,"First Name"),s.Wb(19,"span",12),s.Jc(20,"*"),s.Vb(),s.Vb(),s.Rb(21,"input",13),s.Hc(22,f,2,1,"div",14),s.Vb(),s.Wb(23,"div",15),s.Wb(24,"label"),s.Jc(25,"Last Name"),s.Wb(26,"span",12),s.Jc(27,"*"),s.Vb(),s.Vb(),s.Rb(28,"input",16),s.Hc(29,m,2,1,"div",14),s.Vb(),s.Vb(),s.Vb(),s.Wb(30,"div",6),s.Wb(31,"div",17),s.Wb(32,"div",18),s.Wb(33,"label"),s.Jc(34,"Email"),s.Wb(35,"span",12),s.Jc(36,"*"),s.Vb(),s.Vb(),s.Wb(37,"div",19),s.Rb(38,"input",20),s.Vb(),s.Vb(),s.Wb(39,"div",15),s.Wb(40,"label"),s.Jc(41,"Contact Number"),s.Wb(42,"span",12),s.Jc(43,"*"),s.Vb(),s.Vb(),s.Rb(44,"input",21),s.Hc(45,v,3,2,"div",14),s.Vb(),s.Vb(),s.Vb(),s.Wb(46,"div",6),s.Wb(47,"div",17),s.Wb(48,"div",15),s.Wb(49,"label"),s.Jc(50,"Address 1"),s.Wb(51,"span",12),s.Jc(52,"*"),s.Vb(),s.Vb(),s.Rb(53,"input",22),s.Hc(54,C,2,1,"div",14),s.Vb(),s.Wb(55,"div",18),s.Wb(56,"label"),s.Jc(57,"Address 2"),s.Vb(),s.Rb(58,"input",23),s.Vb(),s.Wb(59,"div",15),s.Wb(60,"label"),s.Jc(61,"Country"),s.Vb(),s.Wb(62,"select",24),s.Wb(63,"option",25),s.Jc(64,"Select Country "),s.Vb(),s.Hc(65,P,2,3,"option",10),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(66,"div",6),s.Wb(67,"div",17),s.Wb(68,"div",15),s.Wb(69,"label"),s.Jc(70,"Old Password"),s.Wb(71,"span",12),s.Jc(72,"*"),s.Vb(),s.Vb(),s.Wb(73,"input",26),s.ec("keyup",(function(e){return t.requiredPassword()}))("change",(function(e){return t.requiredPassword()})),s.Vb(),s.Vb(),s.Wb(74,"div",15),s.Wb(75,"label"),s.Jc(76," New Password"),s.Wb(77,"span",12),s.Jc(78,"*"),s.Vb(),s.Wb(79,"i",27),s.Wb(80,"span",28),s.Jc(81," Password should be atleast 8 characters. Contain atleast 1 number, 1 capital letter, 1 lower case letter and 1 special character! "),s.Vb(),s.Vb(),s.Vb(),s.Wb(82,"input",29),s.ec("keyup",(function(e){return t.validatePassword()}))("change",(function(e){return t.validatePassword()})),s.Vb(),s.Vb(),s.Wb(83,"div",15),s.Wb(84,"label"),s.Jc(85,"Confirm Password"),s.Wb(86,"span",12),s.Jc(87,"*"),s.Vb(),s.Vb(),s.Wb(88,"input",30),s.ec("keyup",(function(e){return t.validatePassword()}))("change",(function(e){return t.validatePassword()})),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Wb(89,"div",31),s.Wb(90,"button",32),s.Jc(91," Update "),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb(),s.Vb()),2&e&&(s.Cb(7),s.pc("formGroup",t.updateProfileForm),s.Cb(8),s.pc("ngForOf",t.saluteNames),s.Cb(1),s.pc("ngClass",s.uc(15,V,t.submitted&&t.f.first_name.errors&&t.f.first_name.errors.required)),s.Cb(6),s.pc("ngIf",t.first_name.invalid&&(t.first_name.dirty||t.first_name.touched)),s.Cb(1),s.pc("ngClass",s.uc(17,V,t.submitted&&t.f.last_name.errors&&t.f.last_name.errors.required)),s.Cb(6),s.pc("ngIf",t.last_name.invalid&&(t.last_name.dirty||t.last_name.touched)),s.Cb(10),s.pc("ngClass",s.uc(19,V,t.submitted&&t.f.mobile.errors&&t.f.mobile.errors.required)),s.Cb(6),s.pc("ngIf",t.mobile.invalid&&(t.mobile.dirty||t.mobile.touched)),s.Cb(3),s.pc("ngClass",s.uc(21,V,t.submitted&&t.f.address_1.errors&&t.f.address_1.errors.required)),s.Cb(6),s.pc("ngIf",t.address_1.invalid&&(t.address_1.dirty||t.address_1.touched)),s.Cb(5),s.pc("ngClass",s.uc(23,V,t.submitted&&t.f.country_id.errors&&t.f.country_id.errors.required)),s.Cb(6),s.pc("ngForOf",t.countries),s.Cb(3),s.pc("ngClass",s.uc(25,V,t.submitted&&t.f.old_password.errors&&t.f.old_password.errors.required)),s.Cb(6),s.pc("ngClass",s.uc(27,V,t.submitted&&t.f.password.errors&&t.f.password.errors.required)),s.Cb(9),s.pc("ngClass",s.uc(29,V,t.submitted&&t.f.password_confirmation.errors&&(t.f.password_confirmation.errors.required||t.f.password_confirmation.errors.unmatched))))},directives:[o.B,o.p,o.i,o.x,o.o,o.h,n.o,n.n,o.c,n.p,o.s,o.A],styles:[".ui.fluid.container[_ngcontent-%COMP%]{padding:0 40px}.update-header[_ngcontent-%COMP%]{display:block;font-weight:700!important;font-size:20px;line-height:23px;color:#181b20;margin:24px}.outer-basic[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 2px 6px rgba(6,40,98,.1)!important;border-radius:4.96141px;margin:24px 24px 180px}.outer-basicForm[_ngcontent-%COMP%]{width:100%;height:auto}.basic-header[_ngcontent-%COMP%]{font-family:Roboto,sans-serif}hr[_ngcontent-%COMP%]{box-sizing:border-box;overflow:visible;border:.5px solid #e0e0e0}.update_text[_ngcontent-%COMP%]{color:#fff;font-family:Roboto,sans-serif;font-size:14px;font-weight:500;line-height:15px;padding-left:10px}.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{font-size:12px}.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{font-size:12px}.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder{font-size:12px}.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{font-size:12px}.dropdown[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:12px}.countryListUser[_ngcontent-%COMP%]{padding:0!important}.validations[_ngcontent-%COMP%]{color:red;font-size:12px}.ui.form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-style:normal;font-weight:500;font-size:13px;line-height:13px;color:#181b20!important;margin:0 0 8px}.ui.form[_ngcontent-%COMP%]   .eight.wide.field[_ngcontent-%COMP%], .ui.form[_ngcontent-%COMP%]   .five.wide.field[_ngcontent-%COMP%]{margin-bottom:16px}i.icon[_ngcontent-%COMP%]{margin-top:24px}.ui.fluid[_ngcontent-%COMP%]   .outer-basic[_ngcontent-%COMP%]   .outer-basicForm[_ngcontent-%COMP%]{padding:24px;-webkit-margin-after:60px;margin-block-end:60px}.tooltip[_ngcontent-%COMP%]{position:relative;display:inline-block;float:right}.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]{visibility:hidden;width:160px;background-color:rgba(0,0,0,.8);color:#fff;text-align:left;border-radius:6px;padding:10px;position:absolute;z-index:1;bottom:100%;left:50%;margin-left:-160px}.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%]{visibility:visible}.ui.fluid[_ngcontent-%COMP%]   .outer-basic[_ngcontent-%COMP%]   .outer-basicForm[_ngcontent-%COMP%]   .ui.form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{color:#181b20!important}.ui.fluid.container[_ngcontent-%COMP%]{padding:0!important;background:none}.bookings_btn-panel[_ngcontent-%COMP%]{position:relative;top:32px;right:-24px}.bookings_btn-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{float:right;margin-right:0;margin-top:20px}@media(max-width:1440px){.outer-basic[_ngcontent-%COMP%]{width:auto;margin:24px}.update-header[_ngcontent-%COMP%]{margin-left:24px}}@media(max-width:1280px){.outer-basic[_ngcontent-%COMP%]{margin:20px}.update-header[_ngcontent-%COMP%]{margin-left:20px}}"]}),w)}],O=((y=function e(){_classCallCheck(this,e)}).\u0275mod=s.Ob({type:y}),y.\u0275inj=s.Nb({factory:function(e){return new(e||y)},imports:[[c.j.forChild(W)],c.j]}),y),x=r("/1cH"),M=r("kmnG"),k=r("qFsG"),J=r("d3UM");r.d(t,"UpdateProfileModule",(function(){return N}));var q,N=((q=function e(){_classCallCheck(this,e)}).\u0275mod=s.Ob({type:q}),q.\u0275inj=s.Nb({factory:function(e){return new(e||q)},imports:[[n.c,O,o.k,o.v,x.b,M.d,k.c,J.a]]}),q)}}]);