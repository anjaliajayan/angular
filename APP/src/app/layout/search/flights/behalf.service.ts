import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class BehalfService {
    
    private creditLimit = new BehaviorSubject<any>(<any>[]);
    currentlimit = this.creditLimit.asObservable();

    constructor() { }

    newcreditlimit(data:any){
        this.creditLimit.next(data);
    }
    
}