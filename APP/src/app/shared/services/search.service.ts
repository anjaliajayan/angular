import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SearchService {

    private searchSource = new BehaviorSubject('');
    searchedData = this.searchSource.asObservable();

    constructor() { }

    feedSearchData(formData: any) {
        this.searchSource.next(formData)
    }

}