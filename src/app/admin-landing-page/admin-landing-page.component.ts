import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrl: './admin-landing-page.component.css'
})
export class AdminLandingPageComponent implements OnInit {
  
  showAddDoctorForm = false;
  isDoctorModalOpen = false;
  isPatientModalOpen=false;
  modalType = '';
  selectedDoctor: any;
  selectedPatient:any;

  newDoctor = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    language: '',
    message: '',
    age: 2 , // Added 'age' field for patient management
  };

  doctorEditForm:FormGroup 
  patientEditForm:FormGroup
  addDoctorForm: FormGroup
  ngOnInit() {
    this.doctorEditForm=new FormGroup({
      name:new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      age: new FormControl('',Validators.required),
    })

    this.patientEditForm=new FormGroup({
      name:new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      age: new FormControl('',Validators.required),
    })

    this.addDoctorForm=new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      mobile: new FormControl('',[Validators.required,Validators.maxLength(10)]),
      language: new FormControl('',Validators.required),
      message:new FormControl('',Validators.maxLength(2000)),
      age: new FormControl('',[Validators.required,Validators.min(4),Validators.max(120)]),
    })
    
    console.log(this.addDoctorForm)
     console.log(this.doctorEditForm)
     console.log(this.patientEditForm)
  }

   

  doctors = [
    { firstName: 'Dr. John', lastName: 'Smith', email: 'john.smith.com', age: 45 },
    { firstName: 'Dr. Jane', lastName: 'Doe', email: 'jane.doecom', age: 38 }
  ];

  patients = [
    { name: 'Emily Johnson', email: 'emily.johnsoncom', age: 29 },
    { name: 'Michael Brown', email: 'michael.browcom', age: 34 }
  ];

  openModalDoctor(type: string, item: any) {
    this.modalType = type;
    this.selectedDoctor = { ...item };
    this.doctorEditForm.patchValue(item)
    this.isDoctorModalOpen = true;
  }

  closeModalDoctor() {
    this.isDoctorModalOpen = false;
  }

  submitEditDoctor() {
    // Save changes to the selectedItem
    if (this.modalType === 'edit') {
      // Logic to save the edited item
      const index = this.doctors.findIndex(p => p.email === this.selectedDoctor.email);
    if (index !== -1) {
      this.doctors[index] = this.doctorEditForm.value;
      // this.patients[index] = { ...this.selectedPatient };
    }
      // alert('Changes saved for ' + this.selectedDoctor.name);
    }
    this.closeModalDoctor();
  }

  openModalPatient(type: string, item: any) {
    this.modalType = type;
    this.selectedPatient = { ...item };
    this.patientEditForm.patchValue(item)
    this.isPatientModalOpen = true;
  }

  closeModalPatient() {
    this.isPatientModalOpen = false;
  }

  submitEditPatient() {
    // Save changes to the selectedItem
    if (this.modalType === 'edit') {
      // Logic to save the edited item
      const index = this.patients.findIndex(p => p.email === this.selectedPatient.email);
    if (index !== -1) {
      this.patients[index] = this.patientEditForm.value;
      // this.patients[index] = { ...this.selectedPatient };
    }
      // alert('Changes saved for ' + this.selectedPatient.name);
    }
    this.closeModalPatient();
  }  

  closeAddDoctorForm(){
    this.showAddDoctorForm = false;
  }

  openDoctorForm(){
    this.showAddDoctorForm = true;
  }
  submitDoctorForm(){
    if(this.addDoctorForm.valid){
    console.log(this.addDoctorForm.value)
    // console.log(this.addPatientForm.value)
    
    this.newDoctor = {
      ...this.newDoctor, // Retain existing properties
      ...this.addDoctorForm.value // Spread the form values into the object
    };
    console.log('New Doctor:', this.newDoctor);
    this.doctors.push({ ...this.newDoctor }); // Add the new patient to the list

    // Reset form after submission
    this.newDoctor = {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      language: '',
      message: '',
      age: 0
    };
    this.closeAddDoctorForm();}
    else{
      alert('Invalid Creditionals')
    }
  }

  
}


