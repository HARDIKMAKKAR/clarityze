import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../shared/doctorService.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HostListener } from '@angular/core';
interface Opt{
  label:string;
  detail:string;
}

@Component({
  selector: 'app-patient-exercises',
  templateUrl: './patient-exercises.component.html',
  styleUrl: './patient-exercises.component.css'
})
export class PatientExercisesComponent implements OnInit {


  exerciseForm: FormGroup
  isFormVisible: boolean = false;
  inputValue: string = '';
  showAddExerciseForm = false;
  formStatus(){
    this.isFormVisible= !this.isFormVisible
  }

  isModalOpen: boolean = false;

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

  constructor(){
    this.exerciseForm=new FormGroup({
      'levelSelected': new FormControl('Level 1'),
      'AnaglyphSelected': new FormControl('None'),
      'colorSelected':new FormControl('Black'),
      'durationSelected': new FormControl('02:00'),
      'bouncesSelected':new FormControl('0'),
      advOptions: new FormGroup({
        'dropdownSelected': new FormControl('Black'),
      })
    })
    console.log(this.exerciseForm)
  }
  ngOnInit(){
    
    console.log('event complete')
  }
  
  closeAddExerciseForm(){
    this.showAddExerciseForm = false;
  }
  openAddExerciseForm(){
    this.showAddExerciseForm = true;
  }
  // Sample data for dropdowns
  // options1 = ['Level 1', 'Level 2', 'Level 3'];
  

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

  selectOption(option: string, dropdown: string,controlName:string) {
  
    // console.log(`Selected option: ${option}`)
    this.exerciseForm.get(controlName)?.setValue(option);
    this[dropdown] = option;
    
    this.hideOptions(); // Hide options after selection
    
  }

   @HostListener('document:click', ['$event'])
   onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.hideOptions(); // Hide options if click is outside
    }
  }

  // Method to handle form submission (add your logic here)
  onSubmit(): void {
    console.log(this.exerciseForm.value)
    // console.log('Form Submitted:', formValues);
    // console.log(this.exerciseForm.value.level)
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
  
  // onClick(){
  //   console.log('hello clicked')
  // }
}
