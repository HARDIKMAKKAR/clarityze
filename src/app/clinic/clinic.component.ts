import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrl: './clinic.component.css'
})
export class ClinicComponent implements OnInit {
  assignMessage: any;
  constructor(private router: Router) {}

  ngOnInit() {

    this.editPatientForm = new FormGroup({
      firstName:new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required),
      age: new FormControl('',[Validators.required,Validators.min(5), Validators.max(120)]),
      email: new FormControl('',[Validators.required, Validators.email]),
    })
    this.assignExerciseForm=new FormGroup({
      exercise: new FormControl('',Validators.required),
      message: new FormControl('',Validators.maxLength(1000)),
      timeout: new FormControl('',Validators.max(40)),
      glasstype: new FormControl('',Validators.required)
    })
    this.addPatientForm=new FormGroup({
      firstName: new FormControl('',Validators.required),
      lastName: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      mobile: new FormControl('',[Validators.required,Validators.maxLength(10)]),
      language: new FormControl('',Validators.required),
      message:new FormControl('',Validators.maxLength(2000)),
      age: new FormControl('',[Validators.required,Validators.min(4),Validators.max(120)]),
    })
     
    console.log(this.addPatientForm)
    console.log(this.assignExerciseForm)
     console.log(this.editPatientForm),
    console.log('hello')
  }

  editPatientForm:FormGroup;
  assignExerciseForm:FormGroup;
  addPatientForm:FormGroup;

  showAddPatientForm = false;
  showEditPatientForm = false;
  showAssignExerciseForm = false;
  showAddExerciseForm = false;
  showCalibrateModal = false;  // For Calibrate carousel modal
  currentSlide = 0;  // Track the current slide in the carousel
  timeout: number; //
  glassType : string;
  activeSection = 'clinic'; // Default section

  // New Patient Form
  newPatient = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    language: '',
    message: '',
    age: 2 , // Added 'age' field for patient management
  };

  // Existing patients array for displaying in table format
  patients = [
    { firstName: 'John', lastName: 'Doe', age: 30, email: 'john@example.com' },
    { firstName: 'patient', lastName: 'patient', age: 22, email: 'patient@example.com' }
  ];

  selectedPatient: any = null; // To keep track of the patient being edited

  // Exercise Form
  newExercise = {
    name: '',
    description: '',
    instructions: ''
  };

  exercises = [
    { name: 'Eye Stretching', description: 'Description of Eye Stretching', instructions: 'Instructions for Eye Stretching' },
    { name: 'Blinking Exercise', description: 'Description of Blinking Exercise', instructions: 'Instructions for Blinking Exercise' }
  ];

  selectedExercise: any = null;
  searchQuery = '';

  // Method to set the active section based on user selection
  setActiveSection(section: string) {
    this.activeSection = section;
    if (section === 'calibrate') {
      this.openCalibrateModal();
    } else {
      this.showCalibrateModal = false; // Close the modal if not calibrate
    }
  }

  openAddPatientForm() {
    this.showAddPatientForm = true;
  }

  closeAddPatientForm() {
    this.showAddPatientForm = false;
  }

  submitPatientForm() {
    console.log(this.addPatientForm.value)
    
    this.newPatient = {
      ...this.newPatient, // Retain existing properties
      ...this.addPatientForm.value // Spread the form values into the object
    };
    console.log('New Patient:', this.newPatient);
    this.patients.push({ ...this.newPatient }); // Add the new patient to the list

    // Reset form after submission
    this.newPatient = {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      language: '',
      message: '',
      age: 0
    };

    this.closeAddPatientForm();
  }

  openEditPatientForm(patient: any) {
    this.selectedPatient = { ...patient }; // Set selected patient for editing
    this.editPatientForm.patchValue(patient)
    this.showEditPatientForm = true;
  }

  closeEditPatientForm() {
    this.showEditPatientForm = false;
  }

  

  

  submitEditPatientForm() {
    // Update the patient details in the list
    if (this.editPatientForm.valid) {
    const index = this.patients.findIndex(p => p.email === this.selectedPatient.email);
    if (index !== -1) {
      this.patients[index] = this.editPatientForm.value;
      // this.patients[index] = { ...this.selectedPatient };
    }

    console.log('Updated Patient:', this.editPatientForm.value);  // SUBMIT EDITTED PATIENT VALUE : FORM UPDATED
    this.closeEditPatientForm();
  }
  else{
    alert('Invalid creditionals')
  }
  }

  openAssignExerciseForm(patient: any) {
    this.selectedPatient = patient; // Set the selected patient for assigning exercise
    this.showAssignExerciseForm = true;
    // this.assignExerciseForm.patchValue(patient)
    this.timeout = 0; 
    this.glassType = '';
  }

  closeAssignExerciseForm() {
    this.showAssignExerciseForm = false;
  }

  // onClicked(exercise:string){
  //   this.assignExerciseForm.get(exercise)?.setValue(exercise)
  //   console.log('option clicked');
  // }

  assignExerciseToPatient() {
    // console.log(`Assigned Exercise: ${this.selectedExercise.name} to Patient: ${this.selectedPatient.firstName}`);
    if(this.assignExerciseForm.valid){
    console.log(this.assignExerciseForm.value)
    this.closeAssignExerciseForm();
    }
    else{
      alert('Invalid creditionals')
    }
  }

  openAddExerciseForm() {
    this.showAddExerciseForm = true;
  }

  closeAddExerciseForm() {
    this.showAddExerciseForm = false;
  }

  submitExerciseForm() {
    console.log('New Exercise:', this.newExercise);
    this.exercises.push({ ...this.newExercise });

    this.newExercise = {
      name: '',
      description: '',
      instructions: ''
    };

    this.closeAddExerciseForm();
  }

  get filteredExercises() {
    return this.exercises.filter(exercise =>
      exercise.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  selectExercise(exercise: any) {
    this.selectedExercise = exercise;
  }

  openCalibrateModal() {
    this.showCalibrateModal = true;
    this.currentSlide = 0; // Start at the first slide
  }

  closeCalibrateModal() {
    this.showCalibrateModal = false;
    this.activeSection = 'clinic';
  }

  nextSlide() {
    if (this.currentSlide < 3) {
      this.currentSlide++;
    }
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }
}
