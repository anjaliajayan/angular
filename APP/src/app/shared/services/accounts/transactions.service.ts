import { environment } from '../../../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TransactionsService {
    url = environment.serverURL;

    constructor(private http: HttpClient) {

    }
    // Get All users role list
    getList(filterData: any) {
        return this.http.post(`${this.url}/api/transaction-list`, filterData);
    }

    // Get User role Details
    getTransaction(id: any) {
        return this.http.get(`${this.url}/api/transaction-view/${id}`);
    }

    getTopUplist(filterData: any){
        return this.http.post(`${this.url}/api/get-topup-list`, filterData);
    }
    // Get User role Details
    getTopup(id: any) {
        return this.http.get(`${this.url}/api/get-topup-view/${id}`);
    }

    updateTopup(formData: any){
        return this.http.post(`${this.url}/api/update-topup-request`, formData);
    }

    getFloatingDepositList(formData: any){
        return this.http.post(`${this.url}/api/get-floating-deposit-list`, formData);
    }

    addFloatingRequest(formData: any){
        return this.http.post(`${this.url}/api/add-floating-deposit`, formData);
    }

    makeCorpTransaction(formData: any){
        return this.http.post(`${this.url}/api/make-corporate-transaction`, formData);
    }

    addAgentTransaction(formData: any){
        return this.http.post(`${this.url}/api/make-agent-transaction`, formData);
    }
    getOrganisationAccount(){
        return this.http.get(`${this.url}/api/get-self-organisation-account`);
    }

    exportTransaction(formData: any){
        return this.http.post(`${this.url}/api/export-transaction`, formData);
    }
    
}
