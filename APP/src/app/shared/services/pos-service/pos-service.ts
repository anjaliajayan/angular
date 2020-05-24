
import { environment } from '../../../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PosService {
    url = environment.serverURL;

    constructor(private http: HttpClient) {}
 
    createNewPosUsingBasicInfo(data: any){
        return this.http.post(`${this.url}/api/pos/create-pos`, data);
    }

    getPosDetails(id: any){
        return this.http.get(`${this.url}/api/pos/fetch-pos/${id}`);
    }

    updatePosDetails(data: any){
        return this.http.post(`${this.url}/api/pos/update-pos`,data);
    }

    getAllActiveSuppliers(){
     return this.http.get(`${this.url}/api/get-all-suppliers`);
    }

    createBranch(data:any){
        return this.http.post(`${this.url}/api/branches/create`,data); 
    }

    fetchAllBranches(id:any){
        return this.http.get(`${this.url}/api/branches/organisation/${id}`);
    }

    deleteBranch(id:any){
        return this.http.post(`${this.url}/api/branches/delete`,id);
    }
    editbranch(id:any){
        return this.http.get(`${this.url}/api/branches/get/${id}`);
    }

    updateBranch(data:any){
        return this.http.post(`${this.url}/api/branches/update`,data);
    }
 
}