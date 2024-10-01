import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'app';
  currentstatus = false;
  constructor(private route : Router,
              private auth : AuthserviceService
  ) { 
    
   
   }

   ngOnInit(): void {
    this.auth.loggedInStatus.subscribe(status =>{
      this.currentstatus = status;
    }
    );
   }
  onLogin(){
    this.route.navigate(['login']);
  }
}
