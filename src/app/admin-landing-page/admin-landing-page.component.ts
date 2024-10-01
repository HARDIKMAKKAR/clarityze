import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-landing-page',
  templateUrl: './doctor-landing-page.component.html',
  styleUrl: './doctor-landing-page.component.css'
})
export class DoctorLandingPageComponent {
  constructor(private router : Router) {}
  showAddPatientForm = false;
  showAddExerciseForm = false;
  showCalibrateModal = false;  // For Calibrate carousel modal
  currentSlide = 0;  // Track the current slide in the carousel

  activeSection = 'clinic'; // Default section

  newPatient = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    language: '',
    message: ''
  };

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
    
    this.newPatient = {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      language: '',
      message: ''
    };
    
    this.closeAddPatientForm();
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

