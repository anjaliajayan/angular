import { LoginService } from "./../shared/services/login.service";
import { CommonService } from "./../shared/services/common.service";
import { Component, OnInit, ɵConsole } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Globals } from 'src/app/shared/utils/globals';
import { prepareGlobals, saveGlobals } from '../shared/utils/common';
import { CookieService } from 'ngx-cookie-service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

declare const $: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  status: boolean = false;
  loginForm = this._fb.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required]],
    rememberMe: this.status
  });

  passwordForm = this._fb.group({
    usernamemail: [null, Validators.required]
  });

  showLogin: boolean = true;
  showPassword: boolean = false;
  passwordFormSubmitted: boolean = false;
  loginLoader: boolean = false;
  otpLoader: boolean = false;
  authErr: boolean = false;
  showOTP: boolean = false;

  otpForm = this._fb.group({
    otp: ["", Validators.required]
  });

  globals: Globals;
  constructor(
    private router: Router,
    private _fb: FormBuilder,
    private loginService: LoginService,
    private toastr: ToastrService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    // this.remember();
  }
  
  login() {
    this.authErr = false;
    this.loginLoader = true;

    let authPayload = {
      username: this.loginForm.get("username").value,
      password: this.loginForm.get("password").value,
      rememberMe: this.loginForm.get("rememberMe").value || false,
    };

    if (this.loginForm.status == "VALID") {

      this.loginService.signin(authPayload).subscribe(
        (res: HttpResponse<any>) => {
          
        
          if (res && res.status === 200) {
            console.log("--------",)
            this.globals = prepareGlobals();
            this.globals.setUsernamePasswordCombinationMatch(res.body.auth);

            saveGlobals(this.globals);
            // if(res.body.otp =="1"){
            // this.showOTP = false;
            // this.loginLoader = false;
            // return this.router.navigateByUrl("/dashboard");

            // }else{
            // this.showOTP = true;
            // this.loginLoader = false;
            // }

            this.showLogin = false;
            this.showOTP = true;
            this.loginLoader = false;

          } else {
            this.toastr.info(`Oops! ${res.statusText}`, 'Unable to login', {
              disableTimeOut: false,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
            this.authErr = true;
            this.loginForm.reset();
            this.loginLoader = false;
            this.showLogin = true;
          }
        },
        err => {
        

          this.loginForm.reset();
          this.loginLoader = false;
          this.showLogin = true;
        }
      );
    } else {
      this.showLogin = true;
      this.authErr = true;
      this.loginLoader = false;
      this.toastr.info(`Oops! Please fill in the required details.`, 'Missing Details', {
        progressBar: false,
        positionClass: 'toast-bottom-right'
      });
    }
  }
  
  
  remember(){
    this.loginService.rememberMe().subscribe((res:any) => {
    if(res.status == 200){
      this.router.navigate(["/dashboard"]);
    }
    });
  }   //for remember me call
  

  clickEvent(){
    this.status = !this.status;       
  }


  verifyOTP() {
    this.otpLoader = true;
    let otpPayload = {
      otp: this.otpForm.get("otp").value,
      authStatus: true,
      username: this.loginForm.get("username").value
    };

    if (this.otpForm.status == "VALID") {
      this.loginService.verifyOTP(otpPayload).subscribe((res:any) => {
        
        if ( res.status == 200) {
          this.otpForm.reset();
          this.otpLoader = false;
          
          this.router.navigate(['/dashboard']).then(nav => {
            console.log('nav', nav); // true if navigation is successful
          }, err => {
            console.log('err', err) // when there's an error
          });
          
        } else {
          // this.showOTP = false;
          this.toastr.info(`Oops! ${res.body.msg}`, 'Unable to verify OTP', {
            disableTimeOut: false,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
          this.otpForm.reset();
          this.otpLoader = false;
        }
      }, err => {
        $(document).ready(function () {
          $(".login-modal").modal("hide");
        });
        this.toastr.info(`Oops! Something bad happened at our end because ${err}`, 'Unable to verify OTP', {
          disableTimeOut: false,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
        this.otpForm.reset();
        this.otpLoader = false;
      }
      );
    } else {
      this.otpLoader = false;
      this.toastr.info(`Oops! Please fill in the OTP.`, 'Empty OTP', {
        disableTimeOut: false,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      });
    }
  }

  resentOtp() {
    let otpPayload = {
      username: this.loginForm.get("username").value
    };
    console.log("resentOTP", otpPayload);
    this.loginService.resentOTP(otpPayload).subscribe((result: any) => {
      console.log("----", result)
      if (result.type != 'error') {
        console.log(result);
        this.toastr.success(`${result.msg}`, `${result.msg}`, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      } else {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }
    });
  }

  backLogin() {
    this.showLogin = true;
    this.showPassword = false;
  }

  resetPasswordForm() {
    this.showLogin = false;
    this.showPassword = true;
    this.showOTP = false;
    this.loginLoader = false;
  }

  btnSendPasswordHandler() {
    this.passwordFormSubmitted = true;
    if (this.passwordForm.invalid) {
      return;
    }

    const data = {
      email: this.gspf().usernamemail.value
    };

    this.loginService.sendPassword(data).subscribe( r => {
      this.passwordForm.reset();
      if (r.status) {  
        this.toastr.success(r.message, r.message, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }
      else {
        this.toastr.error(r.message, 'Error'), {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        };
      }
    }, (apiError: HttpErrorResponse) => {
      this.toastr.error(apiError.error.message, 'Error'), {
        timeOut: 10000,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      }
    });
  }

  gspf() {
    return this.passwordForm.controls;
  }
}
