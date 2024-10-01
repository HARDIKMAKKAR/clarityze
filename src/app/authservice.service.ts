import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
 
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedInStatus = this.loggedIn.asObservable();
  usernamee : string = 'hardik';
  passwordd : number = 2005;
  constructor(private router : Router) { }
  
  login(username : string , password : number){
    
    if(this.usernamee === 'hardik' && this.passwordd === 2005){
      this.loggedIn.next(true);
      return 200;
    }
    else if (this.usernamee === 'patient' && this.passwordd === 123){
      return 400;
    }
    else if (this.usernamee === 'admin' && this.passwordd === 123){
      return 600;
    }
    else {
      return 700;
    }
    
  } 
}

