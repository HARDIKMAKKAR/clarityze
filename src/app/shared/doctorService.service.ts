import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn : 'root'})
export class DoctorService {
  apiUrl : string = '';
  constructor(private http : HttpClient){}

  getDoctorMetaData(docid : string) : Observable <any>{ // return data for logged in doctor
    return this.http.get<string>(this.apiUrl + docid);
  }

  putDoctorMetaData(data : any){ // updating doctors meta data
    return this.http.put(this.apiUrl , data);
  }

  //api to be called when a doc login
  //because on the first page of doc we have the patients list
  getDocsPatientList(){
    return this.http.get(this.apiUrl + "patients");
  }

  //adding a new patient
  postDocsPatientList(newData : any){
    return this.http.post(this.apiUrl , newData);
  }

  //updating data of a existing patient
  putNewPatient(patientId : string){
    return this.http.put(this.apiUrl , patientId);
  }

  //return data around a particular patient
  getDocReportPatient(patientId : string){
    return this.http.get(this.apiUrl + "report" + patientId);
  }
}