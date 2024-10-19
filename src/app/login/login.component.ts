import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private route : Router,
    private auth  : AuthserviceService
  ){}

  username  : string = '';
  password : string;

  @Output() status = new EventEmitter <boolean>();
  
  onclick(){
    let red = this.auth.login(this.username , this.password);
    console.log(red);
    if(red === 200){
      this.route.navigate(['/doctor/clinic']);
    }
    else if (red === 400){
      this.route.navigate(['/patient']);
    }
    else if (red === 600){
      this.route.navigate(['/admin']);
    }
    else{
      alert('Invalid credentials');
    }
  }

}


