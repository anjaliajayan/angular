import { map, catchError } from "rxjs/operators";
import { LoginService } from "./../services/login.service";
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Router } from "@angular/router";
import { of } from "rxjs";

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate() {
    if (this.loginService.isAuthenticated()) {
      this.router.navigate(["/dashboard"]);
    }
    return !this.loginService.isAuthenticated();
  }

  // canActivate() {
  //     if(this.loginService.isAuthenticated()) {
  //         return this.loginService.auth().pipe(map((res:any) => {
  //             if(res && res.auth) {
  //               // Get user roles and permissions and manage according to it
  //               let rolePerms =  JSON.parse(localStorage.getItem('_perm'));
  //               console.log("---rolePerms",rolePerms)

  //               return res.auth;
  //             } else {
  //               this.router.navigate(['/login']);
  //               return false;
  //             }
  //           }), catchError((err) => {
  //             this.router.navigateByUrl('login');
  //             return of(false);
  //           }));
  //     } else {
  //         this.router.navigateByUrl('/login');
  //         return of(false);
  //     }
  // }


  /*
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
        // check if route is restricted by role
        if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
            // role not authorised so redirect to home page
            this.router.navigate(['/']);
            return false;
        }

        // authorised so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
  */
}
