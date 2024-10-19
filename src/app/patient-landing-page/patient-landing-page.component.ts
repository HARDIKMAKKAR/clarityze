import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { FormControl,FormGroup } from '@angular/forms';
interface name{
  title:string;
  firstName:string;
  lastName:string;
}
@Component({
  selector: 'app-patient-landing-page',
  templateUrl: './patient-landing-page.component.html',
  styleUrl: './patient-landing-page.component.css'
})
export class PatientLandingPageComponent  implements OnInit{
  patient:name={
    title:'Mr',
    firstName:'Hardik',
    lastName:'Makkar',
  }
  Detail = new FormGroup({
    title: new FormControl(this.patient.title),
    Fname: new FormControl(this.patient.firstName),
    Lname: new FormControl(this.patient.lastName),
  });
  
  constructor(private route : ActivatedRoute,
    private router : Router,
   
  ){ 
    
  }
  ngOnInit(): void { 
    this.router.navigate([this.activeSection],{relativeTo:this.route})
  }
  // Sname:string='Sample';
  
  isOpen: boolean=false;
  // patientName:string='Hardik Makkar';
  OpenModal(){
    this.isOpen=true;

  }
  closeModal(){
    this.isOpen=false;
  }
  

 

  
  onSubmit() {
    // console.log(this.patient.firstName)
    // console.log(this.Detail.value);
    this.patient.title=this.Detail.value.title
    this.patient.firstName=this.Detail.value.Fname
    this.patient.lastName=this.Detail.value.Lname
    this.closeModal()
    // console.log(typeof(this.patient.firstName))
  }
  activeSection = 'patient-exercises'
}
