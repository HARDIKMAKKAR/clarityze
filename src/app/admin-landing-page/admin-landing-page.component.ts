import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrl: './admin-landing-page.component.css'
})
export class AdminLandingPageComponent {
  
  showAddDoctorForm = false;
  isModalOpen = false;
  modalType = '';
  selectedItem: any;

  doctors = [
    { name: 'Dr. John Smith', email: 'john.smith.com', age: 45 },
    { name: 'Dr. Jane Doe', email: 'jane.doecom', age: 38 }
  ];

  patients = [
    { name: 'Emily Johnson', email: 'emily.johnsoncom', age: 29 },
    { name: 'Michael Brown', email: 'michael.browcom', age: 34 }
  ];

  openModal(type: string, item: any) {
    this.modalType = type;
    this.selectedItem = { ...item };
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitEdit() {
    // Save changes to the selectedItem
    if (this.modalType === 'edit') {
      // Logic to save the edited item
      alert('Changes saved for ' + this.selectedItem.name);
    }
    this.closeModal();
  }
  closeAddDoctorForm(){
    this.showAddDoctorForm = false;
  }

  openDoctorForm(){
    this.showAddDoctorForm = true;
  }
}


