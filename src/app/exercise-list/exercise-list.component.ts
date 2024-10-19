import { Component } from '@angular/core';
import { DoctorService } from '../shared/doctorService.service';

interface Opt{
  label:string;
  detail:string;
}
@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {

  isFormVisible: boolean = false;
  inputValue: string = '';
  showAddExerciseForm = false;
  formStatus(){
    this.isFormVisible= !this.isFormVisible
  }

  isModalOpen: boolean = false;
  constructor(){

  }

  
  closeAddExerciseForm(){
    this.showAddExerciseForm = false;
  }
  openAddExerciseForm(){
    this.showAddExerciseForm = true;
  }
  // Sample data for dropdowns
  // options1 = ['Level 1', 'Level 2', 'Level 3'];
  options1 : Opt[]=[
    {label:'Level 1', detail:'Sample Detail'},
    {label:'Level 2', detail:'Sample Detail'},
    {label:'Level 3', detail:'Sample Detail'},
    {label:'Level 4', detail:'Sample Detail'},
  ]
  options2 = ['None', 'Random', 'MFBF - OD on target','MFBF - OS', 'MFBF - randomly alternating OD/OS', 'Ball OD/Paddles OS','Ball OS/Paddles OD'];
  options3 = ['Black', 'White', 'Bright White'];
  options4 = ['Black', 'White', 'Bright White'];

  selectedDropdown1: string = 'Level 1';
  selectedDropdown2: string = 'None';
  selectedDropdown3: string = 'Black';
  selectedDropdown4: string = 'Black';

  options1Visible: boolean = false;
  options2Visible: boolean = false;
  options3Visible: boolean = false;
  options4Visible: boolean = false;

  // Method to open the modal
  openModal(): void {
    this.isModalOpen = true;
  }

  // Method to close the modal
  closeModal(): void {
    this.isModalOpen = false;
    this.hideOptions();
    this.advVisible=false;
  }

  showOptions(optionType: string): void {
    this.hideOptions(); // Hide other options
    this[optionType + 'Visible'] = true;
  }

  hideOptions(): void {
    this.options1Visible = false;
    this.options2Visible = false;
    this.options3Visible = false;
    this.options4Visible = false;
  }

  selectOption(option: string, dropdown: string): void {
    this[dropdown] = option;
    this.hideOptions(); // Hide options after selection
  }

  // Method to handle form submission (add your logic here)
  onSubmit(formValues: any): void {
    console.log('Form Submitted:', formValues);
    this.closeModal(); // Close the modal after submission
  }
  nestedVisible : boolean=false;
  advVisible: boolean=false;
  showNested(){
    this.nestedVisible=!this.nestedVisible
  }
  showAdvOption(){
    this.advVisible=true;
  }
  ngOnInit(){

  }
}
