import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private route : Router) { }
  onLogin(){
    this.route.navigate(['login'])
  }
  // isOpaque: boolean = false;

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const scrollY = window.scrollY || document.documentElement.scrollTop;
  //   this.isOpaque = scrollY > 0;
  // }
  isOpaque: boolean = false;

  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.isOpaque = scrollY > 0;
    console.log('Scroll Y:', scrollY, 'Is Opaque:', this.isOpaque);

  }
  currentstatus = false;
  onadd(status : any){
      this.currentstatus = status;
  }
  
}