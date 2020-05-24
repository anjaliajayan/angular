import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanLoad,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../services/login.service";

@Injectable({
  providedIn: "root"
})
export class CommonGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private loginService: LoginService) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.canLoad();
  }
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.loginService.isAuthenticated()) {
      this.router.navigate(["/login"]);
      console.log('navigate to login from guard');
    }
    return this.loginService.isAuthenticated();
  }
}
