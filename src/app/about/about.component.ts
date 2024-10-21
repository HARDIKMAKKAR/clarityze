import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
 
  roles=['Doctor','Patient']

contactForm: FormGroup

ngOnInit() {
  this.contactForm= new FormGroup({
    role: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    mobile: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    address: new FormControl('')
  })

  console.log(this.contactForm)
}
  onSubmit(){
    console.log(this.contactForm.value)
  }
}
