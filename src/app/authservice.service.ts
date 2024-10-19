import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
 
  
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedInStatus = this.loggedIn.asObservable();
  constructor(private router : Router) { }
  
  login(username : string , password : string){
  
    if(username === 'hardik' && password === '2005'){
      this.loggedIn.next(true);
      return 200;
    }
    else if (username === 'patient' && password=== '123'){
      this.loggedIn.next(true);
      return 400;
    }
    else if (username === 'admin' && password=== '123'){
      this.loggedIn.next(true);
      return 600;
    }
    else {
      return 700;
    }
    
  } 
}

