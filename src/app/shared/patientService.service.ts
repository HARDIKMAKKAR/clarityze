import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn : 'root'})
export class PatientService {
  apiUrl : string = '';
  constructor(private http : HttpClient){}

  getPatientMetaData(patientId : string) : Observable <any>{ // return data for logged in doctor
    return this.http.get<string>(this.apiUrl + patientId);
  }

  getPatientGameData(patientId : string){
    return this.http.get<string>(this.apiUrl + "game" + patientId);
  }

  putPatientGameData(patientId : string){
    return this.http.put<string>(this.apiUrl  , patientId);
  }

  putPatientReportData(patientId : string){
    return this.http.put<string>(this.apiUrl  , patientId);
  }

}