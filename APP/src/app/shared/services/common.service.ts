import { environment } from './../../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Globals } from 'src/app/shared/utils/globals';
import {prepareGlobals} from "../utils/common";
@Injectable({
    providedIn: 'root'
})

export class CommonService {
    url = environment.serverURL;
    globals: Globals;

    constructor(private http: HttpClient){}

    // Get Country list
    getCountryList(){
        return this.http.get(`${this.url}/api/get-country`);
    }

    // Get TimeZones list
    getTimeZones(){
        return this.http.get(`${this.url}/api/get-timezones`);
    }

    // Get Cities list
    getCityList(id:any){
        return this.http.get(`${this.url}/api/get-country-city/${id}`);
    }

    // get organization list
    getOrganizationList(){
        return this.http.get(`${this.url}/api/get-organization-list`);
    }

  getOrganizationById(id: Number){
    return this.http.get(`${this.url}/api/pos/fetch-pos/${id}`);
  }

    getHierarchyByOrg(id: Number){
        return this.http.get(`${this.url}/api/get-organization-hierarchy/${id}`);
    }


    // get organization list
    getAgentsList(){
        return this.http.get(`${this.url}/api/get-agents-list`);
    }

    getHierarchyByApproval(id: Number){
        return this.http.get(`${this.url}/api/get-organization-hierarchy-by-approval/${id}`);
    }

    getSettingList(fields: { name: string[] | string[]; }){
        //console.log('╔═══════════════════════════════════════════════════╗')
        //console.log('║ shared/services/common.service.ts::getSettingList ║')
        //console.log('╚═══════════════════════════════════════════════════╝')
        return this.http.post(`${this.url}/api/get-settings`, fields, {withCredentials: true});
    }

    getRficDetails(){
        return this.http.get(`${this.url}/api/get-rfic-list`);
    }

    getAirlines(){
        return this.http.get(`${this.url}/api/get-airlines-list`);
    }

    getSupplierList(){
        return this.http.get(`${this.url}/api/get-supplier-list`);
    }

    getSelfAgentsList(){
        return this.http.get(`${this.url}/api/get-self-agent-list`);
    }

    getCurrencyList(){
        return this.http.get(`${this.url}/api/get-currency-list`);
    }

    getStaffProfileList(orgId:any){
        return this.http.get(`${this.url}/api/get-staff-profile-list/${orgId}`);
    }

    getChildCoporatesList(){
        return this.http.get(`${this.url}/api/get-self-agent-list`);
        // return this.http.get(`${this.url}/api/fetch-all-organization`);
    }

    getTransactionDetailByAgent(orgId:any){
        return this.http.get(`${this.url}/api/get-transaction-detail-by-agent/${orgId}`);
    }

    getChildAgentList(){
        return this.http.get(`${this.url}/api/get-self-agent-list`);
    //    return this.http.get(`${this.url}/api/fetch-all-organization`);
    }

    getFloatingSupplierList(){
        return this.http.get(`${this.url}/api/get-floating-supplier-list`);
    }

    getAirportsList(){
        return this.http.get(`${this.url}/api/get-airports-cache`);
    }


    uploadImagetoAWS(base64Img){
        return this.http.post(`${this.url}/api/upload-image-aws`, { b64: base64Img});
    }

    uploadPDFtoAWS(base64Pdf){
        return this.http.post(`${this.url}/api/upload-pdf-aws`, { b64: base64Pdf});
    }



    getOrgBranches(orgId){
        return this.http.get(`${this.url}/api/organization/branches/${orgId}`);
    }
    makeTransaction(pramas){
        return this.http.post(`${this.url}/api//make-agent-transaction`,pramas);
        }
}
