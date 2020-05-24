import { Injectable } from '@angular/core';
import { test } from '../models/test'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
    providedIn: 'root'
})
export class TestService {

    private globalV = new BehaviorSubject<any>(false);

    public anotherV: Observable<any> = this.globalV.asObservable();

    constructor() {
    }

    set isLoggedIn(logged: any) {
        this.globalV.next(logged);
    }

    get isLoggedIn() {
        return this.anotherV;
    }

    logout() {
        this.isLoggedIn = false;
    }

    login() {
        this.isLoggedIn = true;
    }


}
