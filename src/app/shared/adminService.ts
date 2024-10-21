import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { subscriptionLogsToBeFn } from "rxjs/internal/testing/TestScheduler";
@Injectable({providedIn : 'root'})
export class AdminService {
    constructor(private http : HttpClient){}
    apiUrl : string = '';
    getAdminMetaData(){ // return personal data of admin
        return this.http.get(this.apiUrl);
    }
    getAdminDocList(){  // returns docList
        return this.http.get(`${this.apiUrl}`);
    }
    getAdminPatientList(){ // returns patientList
        return this.http.get(this.apiUrl + "patients");
    }
    postAdminDoctor(newDocData : any){
        return this.http.post(this.apiUrl , newDocData);
    }
    putAdminDoctor(docId : string , newData){
          const url = `${this.apiUrl}/${docId}`; // e.g., https://api.example.com/resource/1
          return this.http.put(url, newData);
     }

    getAdminDocData(docId : string){
        return this.http.get(this.apiUrl + "doctor/" + docId)
    }
    getAdminPatientData(pateintId : string){
        return this.http.get(this.apiUrl + "patient/" + pateintId)
    }
    postAdminPatient(newpatientData : any){
        return this.http.post(this.apiUrl ,newpatientData );
    }
    putAdminPatientData(patientId : string , patientData : any){
        const url = `${this.apiUrl}/${patientId}`; // e.g., https://api.example.com/resource/1
        return this.http.put(url, patientData);
    }
}