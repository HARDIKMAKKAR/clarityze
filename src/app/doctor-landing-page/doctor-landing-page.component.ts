import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,FormGroup } from '@angular/forms';

interface name{
  title:string;
  firstName:string;
  lastName:string;
}

@Component({
  selector: 'app-doctor-landing-page',
  templateUrl: './doctor-landing-page.component.html',
  styleUrl: './doctor-landing-page.component.css'
})
export class DoctorLandingPageComponent {

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

  assignMessage: any;
    constructor(private router: Router) {}
  
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
      age: 0  // Added 'age' field for patient management
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
      this.showEditPatientForm = true;
    }
  
    closeEditPatientForm() {
      this.showEditPatientForm = false;
    }
  
    submitEditPatientForm() {
      // Update the patient details in the list
      const index = this.patients.findIndex(p => p.email === this.selectedPatient.email);
      if (index !== -1) {
        this.patients[index] = { ...this.selectedPatient };
      }
  
      console.log('Updated Patient:', this.selectedPatient);
      this.closeEditPatientForm();
    }
  
    openAssignExerciseForm(patient: any) {
      this.selectedPatient = patient; // Set the selected patient for assigning exercise
      this.showAssignExerciseForm = true;
      this.timeout = 0; 
      this.glassType = '';
    }
  
    closeAssignExerciseForm() {
      this.showAssignExerciseForm = false;
    }
  
    assignExerciseToPatient() {
      console.log(`Assigned Exercise: ${this.selectedExercise.name} to Patient: ${this.selectedPatient.firstName}`);
      this.closeAssignExerciseForm();
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

    myClinic=0;
    Exercises=0;
    Caliberate=0;
    Logout=0
    onWhite(){
      this.myClinic=0;
      this.Exercises=0;
      this.Caliberate=0;
      this.Logout=0;
    }
    onLight(cls:string){
      this.onWhite();
      this[cls]=1;
      console.log(this[cls])
    }

    // lastNode: string | null = null;

    // getLastNode(): void {
    //   // Get the current URL
    //   const currentUrl = this.router.url;
  
    //   // Split the URL into parts
    //   const urlParts = currentUrl.split('/');
  
    //   // Access the last part
    //   this.lastNode = urlParts[urlParts.length - 1] || null;
  
    //   console.log('Last node:', this.lastNode);
    // }
  

    
}
