function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var o=0;o<n.length;o++){var e=n[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function _createClass(t,n,o){return n&&_defineProperties(t.prototype,n),o&&_defineProperties(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{X3zk:function(t,n,o){"use strict";o.r(n);var e=o("ofXK"),r=o("3Pt+"),i=o("lM/l"),c=o("fXoL"),s=o("tyNb"),g=o("FonL"),a=o("5eHb"),d=o("ReVU");function p(t,n){if(1&t){var o=c.Xb();c.Wb(0,"form",12),c.ec("ngSubmit",(function(t){return c.Ac(o),c.ic().login()})),c.Wb(1,"div",13),c.Rb(2,"img",14),c.Wb(3,"div",15),c.Rb(4,"input",16),c.Vb(),c.Wb(5,"div",15),c.Rb(6,"input",17),c.Vb(),c.Wb(7,"div",15),c.Wb(8,"div",18),c.Wb(9,"input",19),c.ec("click",(function(t){return c.Ac(o),c.ic().clickEvent()})),c.Vb(),c.Wb(10,"label"),c.Jc(11,"Remember me"),c.Vb(),c.Vb(),c.Vb(),c.Wb(12,"button",20),c.Jc(13,"Submit"),c.Vb(),c.Wb(14,"div",21),c.Wb(15,"span",22),c.ec("click",(function(t){return c.Ac(o),c.ic().resetPasswordForm()})),c.Wb(16,"a"),c.Jc(17,"Reset Password"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()}if(2&t){var e=c.ic();c.pc("formGroup",e.loginForm),c.Cb(3),c.Hb("error",e.authErr||!0===(null==e.loginForm.controls.username.errors?null:e.loginForm.controls.username.errors.required)&&e.loginForm.controls.username.touched),c.Cb(2),c.Hb("error",e.authErr||!0===(null==e.loginForm.controls.password.errors?null:e.loginForm.controls.password.errors.required)&&e.loginForm.controls.password.touched),c.Cb(4),c.pc("ngClass",e.status?"true":"false"),c.Cb(3),c.Hb("loading",e.loginLoader),c.pc("disabled",e.loginLoader)}}function l(t,n){if(1&t){var o=c.Xb();c.Wb(0,"form",23),c.Wb(1,"div",13),c.Rb(2,"img",14),c.Wb(3,"p",24),c.Jc(4,"OTP Verification"),c.Vb(),c.Wb(5,"p"),c.Jc(6,"We've sent you an email for your One-Time-Pin (OTP). Kindly Verify your OTP."),c.Vb(),c.Wb(7,"div",25),c.Wb(8,"div",26),c.Wb(9,"div",27),c.Rb(10,"input",28),c.Vb(),c.Vb(),c.Wb(11,"div",26),c.Wb(12,"button",29),c.ec("click",(function(t){return c.Ac(o),c.ic().verifyOTP()})),c.Jc(13,"Verify"),c.Vb(),c.Vb(),c.Wb(14,"div",21),c.Wb(15,"span",22),c.ec("click",(function(t){return c.Ac(o),c.ic().resentOtp()})),c.Wb(16,"a"),c.Jc(17,"Resent OTP"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()}if(2&t){var e=c.ic();c.pc("formGroup",e.otpForm),c.Cb(9),c.Hb("error",!0===(null==e.otpForm.controls.otp.errors?null:e.otpForm.controls.otp.errors.required)&&e.otpForm.controls.otp.touched),c.Cb(3),c.Hb("loading",e.otpLoader),c.pc("disabled",e.otpLoader)}}function b(t,n){if(1&t){var o=c.Xb();c.Wb(0,"form",23),c.Wb(1,"div",13),c.Rb(2,"img",14),c.Wb(3,"p",24),c.Jc(4,"Rest Password"),c.Vb(),c.Wb(5,"p"),c.Jc(6,"Enter your username / email to get reset password instruction."),c.Vb(),c.Wb(7,"div",25),c.Wb(8,"div",26),c.Wb(9,"div",27),c.Rb(10,"input",30),c.Vb(),c.Vb(),c.Wb(11,"div",26),c.Wb(12,"button",29),c.ec("click",(function(t){return c.Ac(o),c.ic().btnSendPasswordHandler()})),c.Jc(13,"Send Password"),c.Vb(),c.Vb(),c.Wb(14,"div",21),c.Wb(15,"span",22),c.ec("click",(function(t){return c.Ac(o),c.ic().backLogin()})),c.Wb(16,"a"),c.Jc(17,"Back to Login"),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb()}if(2&t){var e=c.ic();c.pc("formGroup",e.passwordForm),c.Cb(12),c.Hb("loading",e.otpLoader),c.pc("disabled",e.otpLoader)}}var _,u,m=[{path:"",component:(_=function(){function t(n,o,e,i,c){_classCallCheck(this,t),this.router=n,this._fb=o,this.loginService=e,this.toastr=i,this.cookieService=c,this.status=!1,this.loginForm=this._fb.group({username:["",[r.z.required]],password:["",[r.z.required]],rememberMe:this.status}),this.passwordForm=this._fb.group({usernamemail:[null,r.z.required]}),this.showLogin=!0,this.showPassword=!1,this.passwordFormSubmitted=!1,this.loginLoader=!1,this.otpLoader=!1,this.authErr=!1,this.showOTP=!1,this.otpForm=this._fb.group({otp:["",r.z.required]})}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"login",value:function(){var t=this;this.authErr=!1,this.loginLoader=!0;var n={username:this.loginForm.get("username").value,password:this.loginForm.get("password").value,rememberMe:this.loginForm.get("rememberMe").value||!1};"VALID"==this.loginForm.status?this.loginService.signin(n).subscribe((function(n){n&&200===n.status?(console.log("--------"),t.globals=Object(i.i)(),t.globals.setUsernamePasswordCombinationMatch(n.body.auth),Object(i.m)(t.globals),t.showLogin=!1,t.showOTP=!0,t.loginLoader=!1):(t.toastr.info("Oops! ".concat(n.statusText),"Unable to login",{disableTimeOut:!1,progressBar:!1,positionClass:"toast-bottom-right"}),t.authErr=!0,t.loginForm.reset(),t.loginLoader=!1,t.showLogin=!0)}),(function(n){t.toastr.info("Oops! Something bad happened at our end because ".concat(n),"Unable to login",{disableTimeOut:!1,progressBar:!1,positionClass:"toast-bottom-right"}),t.loginForm.reset(),t.loginLoader=!1,t.showLogin=!0})):(this.showLogin=!0,this.authErr=!0,this.loginLoader=!1,this.toastr.info("Oops! Please fill in the required details.","Missing Details",{progressBar:!1,positionClass:"toast-bottom-right"}))}},{key:"remember",value:function(){var t=this;this.loginService.rememberMe().subscribe((function(n){200==n.status&&t.router.navigate(["/dashboard"])}))}},{key:"clickEvent",value:function(){this.status=!this.status}},{key:"verifyOTP",value:function(){var t=this;this.otpLoader=!0;var n={otp:this.otpForm.get("otp").value,authStatus:!0,username:this.loginForm.get("username").value};"VALID"==this.otpForm.status?this.loginService.verifyOTP(n).subscribe((function(n){200==n.status?(console.log("======================================"),console.log(n.status,n.body),console.log("======================================"),t.otpForm.reset(),t.otpLoader=!1,t.router.navigate(["/dashboard"]).then((function(t){console.log("nav",t)}),(function(t){console.log("err",t)}))):(t.toastr.info("Oops! ".concat(n.body.msg),"Unable to verify OTP",{disableTimeOut:!1,progressBar:!1,positionClass:"toast-bottom-right"}),t.otpForm.reset(),t.otpLoader=!1)}),(function(n){$(document).ready((function(){$(".login-modal").modal("hide")})),t.toastr.info("Oops! Something bad happened at our end because ".concat(n),"Unable to verify OTP",{disableTimeOut:!1,progressBar:!1,positionClass:"toast-bottom-right"}),t.otpForm.reset(),t.otpLoader=!1})):(this.otpLoader=!1,this.toastr.info("Oops! Please fill in the OTP.","Empty OTP",{disableTimeOut:!1,progressBar:!1,positionClass:"toast-bottom-right"}))}},{key:"resentOtp",value:function(){var t=this,n={username:this.loginForm.get("username").value};console.log("resentOTP",n),this.loginService.resentOTP(n).subscribe((function(n){console.log("----",n),"error"!=n.type?(console.log(n),t.toastr.success("".concat(n.msg),"".concat(n.msg),{timeOut:1e4,progressBar:!1,positionClass:"toast-bottom-right"})):t.toastr.error("".concat(n.msg),"".concat(n.msg),{timeOut:1e4,progressBar:!1,positionClass:"toast-bottom-right"})}))}},{key:"backLogin",value:function(){this.showLogin=!0,this.showPassword=!1}},{key:"resetPasswordForm",value:function(){this.showLogin=!1,this.showPassword=!0,this.showOTP=!1,this.loginLoader=!1}},{key:"btnSendPasswordHandler",value:function(){var t=this;if(this.passwordFormSubmitted=!0,!this.passwordForm.invalid){var n={email:this.gspf().usernamemail.value};this.loginService.sendPassword(n).subscribe((function(n){t.passwordForm.reset(),n.status?t.toastr.success(n.message,n.message,{timeOut:1e4,progressBar:!1,positionClass:"toast-bottom-right"}):t.toastr.error(n.message,"Error")}),(function(n){t.toastr.error(n.error.message,"Error")}))}}},{key:"gspf",value:function(){return this.passwordForm.controls}}]),t}(),_.\u0275fac=function(t){return new(t||_)(c.Qb(s.f),c.Qb(r.f),c.Qb(g.a),c.Qb(a.b),c.Qb(d.a))},_.\u0275cmp=c.Kb({type:_,selectors:[["app-login"]],decls:14,vars:3,consts:[[1,"ui","grid","login-grid"],[1,"sixteen","wide","column","login-grid_content"],[1,"ui","centered","container"],[1,"ui","one","column","centered","grid"],[1,"five","wide","column","animated","fadeIn"],["class","ui form card arora-card text-center",3,"formGroup","ngSubmit",4,"ngIf"],["class","ui form card otp-card arora-card animated fadeIn text-center",3,"formGroup",4,"ngIf"],["src","./../../assets/img/planes-illus.svg",1,"login-grid_content__placeholder-img","animated","fadeInUp"],[1,"ui","modal","login-modal"],[1,"close","icon"],[1,"header"],[1,"description"],[1,"ui","form","card","arora-card","text-center",3,"formGroup","ngSubmit"],[1,"content"],["src","./../../assets/img/tpconnects-logo-blue.svg",1,"login-grid_content__logo"],[1,"field"],["type","text","name","username","required","","formControlName","username","placeholder","Username"],["type","password","name","password","required","","formControlName","password","placeholder","Password"],[1,"ui","checkbox"],["type","checkbox","tabindex","0","formControlName","rememberMe",3,"ngClass","click"],["type","submit",1,"ui","secondary","button",3,"disabled"],[1,"col-12","text-right"],[3,"click"],[1,"ui","form","card","otp-card","arora-card","animated","fadeIn","text-center",3,"formGroup"],[1,"ui","header"],[1,"row"],[1,"col-12"],[1,"from-group"],["type","password","min","0","name","otp","max","6","formControlName","otp","placeholder","",1,"form-control"],["type","button",1,"ui","secondary","button",3,"disabled","click"],["type","text","formControlName","usernamemail","placeholder","",1,"form-control"]],template:function(t,n){1&t&&(c.Wb(0,"div",0),c.Wb(1,"div",1),c.Wb(2,"div",2),c.Wb(3,"div",3),c.Wb(4,"div",4),c.Hc(5,p,18,9,"form",5),c.Hc(6,l,18,6,"form",6),c.Hc(7,b,18,4,"form",6),c.Vb(),c.Rb(8,"img",7),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(9,"div",8),c.Rb(10,"i",9),c.Wb(11,"div",10),c.Jc(12," Verify OTP "),c.Vb(),c.Rb(13,"div",11),c.Vb()),2&t&&(c.Cb(5),c.pc("ngIf",n.showLogin),c.Cb(1),c.pc("ngIf",n.showOTP),c.Cb(1),c.pc("ngIf",n.showPassword))},directives:[e.p,r.B,r.p,r.i,r.c,r.w,r.o,r.h,r.a,e.n],styles:[".stepper-grid[_ngcontent-%COMP%]{margin-top:30px;margin-bottom:30px}.stepper-grid[_ngcontent-%COMP%]   .stepper-grid_step[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;opacity:.6;cursor:pointer}.stepper-grid[_ngcontent-%COMP%]   .stepper-grid_step._active[_ngcontent-%COMP%]{opacity:1;-webkit-transition:opacity 1s cubic-bezier(.075,.82,.165,1);transition:opacity 1s cubic-bezier(.075,.82,.165,1)}.stepper-grid[_ngcontent-%COMP%]   .stepper-grid_step._active[_ngcontent-%COMP%]   .stepper-grid_step__step-icon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#062862;border:0}.stepper-grid[_ngcontent-%COMP%]   .stepper-grid_step._active[_ngcontent-%COMP%]   .stepper-grid_step__step-icon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div.image[_ngcontent-%COMP%]{background-color:#fff}.stepper-grid[_ngcontent-%COMP%]   .stepper-grid_step._active[_ngcontent-%COMP%]   .stepper-grid_step__step-icon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{border:2px solid #a6b1c3}.stepper-grid[_ngcontent-%COMP%]   .stepper-grid_step._active[_ngcontent-%COMP%]   .stepper-grid_step__step-icon[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{border:0;background-color:#062862;color:#fff}.stepper-grid[_ngcontent-%COMP%]   .stepper-grid_step._active[_ngcontent-%COMP%]   .stepper-grid_step__step-border[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border-bottom:2px solid #062862}.stepper-grid[_ngcontent-%COMP%]   .stepper-grid_step._activated[_ngcontent-%COMP%]{opacity:1;-webkit-transition:opacity 1s cubic-bezier(.075,.82,.165,1);transition:opacity 1s cubic-bezier(.075,.82,.165,1)}.stepper-grid[_ngcontent-%COMP%]   .stepper-grid_step._activated[_ngcontent-%COMP%]   .stepper-grid_step__step-icon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#437ada;border:0}.stepper-grid[_ngcontent-%COMP%]   .stepper-grid_step._activated[_ngcontent-%COMP%]   .stepper-grid_step__step-icon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div.image[_ngcontent-%COMP%]{background-color:#fff}.stepper-grid[_ngcontent-%COMP%]   .stepper-grid_step._activated[_ngcontent-%COMP%]   .stepper-grid_step__step-icon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{border:2px solid #a6b1c3}.stepper-grid[_ngcontent-%COMP%]   .stepper-grid_step._activated[_ngcontent-%COMP%]   .stepper-grid_step__step-icon[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{border:0;background-color:#437ada;color:#fff}.stepper-grid[_ngcontent-%COMP%]   .stepper-grid_step._activated[_ngcontent-%COMP%]   .stepper-grid_step__step-border[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border-bottom:2px solid #437ada}.stepper-grid[_ngcontent-%COMP%]   .stepper-grid_step[_ngcontent-%COMP%]   .stepper-grid_step__step-icon[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.stepper-grid[_ngcontent-%COMP%]   .stepper-grid_step[_ngcontent-%COMP%]   .stepper-grid_step__step-icon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:transparent;border:2px solid #a6b1c3;color:#fff;width:45px;height:45px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;border-radius:50%}.stepper-grid[_ngcontent-%COMP%]   .stepper-grid_step[_ngcontent-%COMP%]   .stepper-grid_step__step-icon[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100px;height:auto;line-height:24px;text-align:center;background-color:transparent;border:2px solid #a6b1c3;margin-top:15px;font-family:Roboto,sans-serif;font-weight:600!important;font-size:13px;color:#a6b1c3;border-radius:8px}.stepper-grid[_ngcontent-%COMP%]   .stepper-grid_step[_ngcontent-%COMP%]   .stepper-grid_step__step-icon[_ngcontent-%COMP%]   label._last[_ngcontent-%COMP%]{width:150px}.stepper-grid[_ngcontent-%COMP%]   .stepper-grid_step[_ngcontent-%COMP%]   .stepper-grid_step__step-border[_ngcontent-%COMP%]{width:100%}.stepper-grid[_ngcontent-%COMP%]   .stepper-grid_step[_ngcontent-%COMP%]   .stepper-grid_step__step-border[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin-top:-24px;width:100%;height:2px;background:none;border-bottom:2px solid #a6b1c3}.stepper-grid-content[_ngcontent-%COMP%]{display:none}.stepper-grid-content._active[_ngcontent-%COMP%]{display:block}.login-grid[_ngcontent-%COMP%]{height:calc(100vh + 30px);overflow:hidden;background-color:#062862;background-color:linear-gradient(1turn,#3964ae -12.16%,#062862 104.55%);background-image:url(pattern-bg.46d23a0807e5258dfffa.svg);background-repeat:repeat;background-position:50%}.login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]{position:relative}.login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]   .five.wide.column[_ngcontent-%COMP%]{position:relative;z-index:1000000}.login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{text-align:center;margin-top:130px}.login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .ui.checkbox[_ngcontent-%COMP%]{margin:8px 0}.login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .ui.checkbox[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:before, .login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .ui.checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before{border:2px solid #437ada}.login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]   form.arora-card[_ngcontent-%COMP%]{padding-left:18px!important;padding-right:18px!important}.login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]   form.arora-card.otp-card[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{margin-top:20px}.login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]   form.arora-card[_ngcontent-%COMP%]   .ui.header[_ngcontent-%COMP%]{color:#062862;font-weight:600!important}.login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]   form.arora-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:rgba(6,40,98,.5)}.login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:0!important;background-color:rgba(67,122,218,.15)}.login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:first-child{margin-top:14px}.login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{font-weight:400!important;text-align:left;color:#062862;opacity:.5}.login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-moz-placeholder, .login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{font-weight:400!important;text-align:left;color:#062862;opacity:.5}.login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{font-weight:400!important;text-align:left;color:#062862;opacity:.5}.login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .ui.button[_ngcontent-%COMP%]{background-color:#437ada!important;min-width:100%!important}.login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login-grid_content__title[_ngcontent-%COMP%]{font-size:28px;font-weight:300}.login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login-grid_content__logo[_ngcontent-%COMP%]{padding:0 16px 15px;margin-bottom:15px;width:100%;height:auto}.login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%], .login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:400!important;text-align:left;color:#a6b1c3}.login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;max-width:133px;border-radius:50px;font-weight:300}.login-grid[_ngcontent-%COMP%]   .login-grid_content[_ngcontent-%COMP%]   .login-grid_content__placeholder-img[_ngcontent-%COMP%]{position:fixed;bottom:0;z-index:0;width:100%;max-width:calc(100% - 400px);height:auto}.login-grid[_ngcontent-%COMP%]   .login-grid_bg-color[_ngcontent-%COMP%]{background-color:#3867b1;position:relative}@keyframes flickerAnimation{0%{opacity:1}50%{opacity:.25}to{opacity:1}}@-webkit-keyframes flickerAnimation{0%{opacity:1}50%{opacity:.25}to{opacity:1}}.login-grid[_ngcontent-%COMP%]   .login-grid_bg-color[_ngcontent-%COMP%]   .animate-flicker[_ngcontent-%COMP%]{-webkit-animation:flickerAnimation 4s infinite;animation:flickerAnimation 4s infinite}.login-grid[_ngcontent-%COMP%]   .login-grid_bg-color[_ngcontent-%COMP%]   .login-grid_pattern[_ngcontent-%COMP%]{width:100%;max-width:552px;display:block;margin:0 auto}.login-grid[_ngcontent-%COMP%]   .login-grid_bg-color[_ngcontent-%COMP%]   .login-grid_pattern[_ngcontent-%COMP%]:first-child{margin-top:60px}.login-grid[_ngcontent-%COMP%]   .login-grid_bg-color[_ngcontent-%COMP%]   .login-grid_logo[_ngcontent-%COMP%]{position:absolute;right:42px;bottom:42px;z-index:10;width:100%;max-width:160px}"]}),_)}],O=((u=function t(){_classCallCheck(this,t)}).\u0275mod=c.Ob({type:u}),u.\u0275inj=c.Nb({factory:function(t){return new(t||u)},imports:[[s.j.forChild(m)],s.j]}),u);o.d(n,"LoginModule",(function(){return C}));var P,C=((P=function t(){_classCallCheck(this,t)}).\u0275mod=c.Ob({type:P}),P.\u0275inj=c.Nb({factory:function(t){return new(t||P)},imports:[[e.c,O,r.v]]}),P)}}]);