import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface caliberateData {
  screenHeight: string,
  workingDistance: string,
  colorCaliberation: {
    brightnessRed: string,
    brightnessBlue: string
  }
}

@Component({
  selector: 'app-caliberate',
  templateUrl: './caliberate.component.html',
  styleUrl: './caliberate.component.css'
})
export class CaliberateComponent implements OnInit {

  caliberation: caliberateData;
  selectedImageIndex;

  images = [{
    src: "https://neurovisualtrainer.com/assets/red-green.png"
  },
  {
    src: "https://neurovisualtrainer.com/assets/cyan-red.png"
  },
  {
    src: "https://neurovisualtrainer.com/assets/green-red.png"
  }, {
    src: "https://neurovisualtrainer.com/assets/red-green.png"
  }];
  // caliberateForm:FormGroup
  ngOnInit() {
    // this.caliberateForm=new FormGroup({
    //   scrnHeight: new FormControl(''),
    //   wrkingDistance:new FormControl(''),
    //   colorCalib: new FormGroup({
    //     brightRed:new FormControl(''),
    //     brightBlue: new FormControl(''),
    //   })
    // })
    this.router.url.subscribe(url => {
      console.log(url);
      this.Url = JSON.stringify(url[0].path);
    });
    if (localStorage.getItem("caliberateData") === null) {

      this.caliberation = {
        screenHeight: window.screen.availHeight.toString(), workingDistance: "10", colorCaliberation: {
          brightnessRed: "20",
          brightnessBlue: "20"
        }
      };
      localStorage.setItem("caliberateData", JSON.stringify(this.caliberation));
      console.log("data = null");
      console.log(this.caliberation);
      this.cmValue = +this.caliberation.workingDistance;
      this.brightnessValue = +this.caliberation.colorCaliberation.brightnessRed;
      this.brightnessValue1 = +this.caliberation.colorCaliberation.brightnessBlue;
      this.inchesValue = this.CM_TO_INCHES;
    }
    else {
      this.caliberation = JSON.parse(localStorage.getItem("caliberateData"));
      console.log("data != null");
      console.log(this.caliberation);
      console.log(typeof (this.caliberation));
      this.cmValue = +this.caliberation.workingDistance;
      this.brightnessValue = +this.caliberation.colorCaliberation.brightnessRed;
      this.brightnessValue1 = +this.caliberation.colorCaliberation.brightnessBlue;
      this.inchesValue = this.CM_TO_INCHES;
    }

  }
  constructor(private route: Router
    , private router: ActivatedRoute
  ) { }
  Url;
  showCalibrateModal = true;  // For Calibrate carousel modal
  currentSlide = 0;  // Track the current slide in the carousel
  timeout: number; //
  glassType: string;
  // activeSection = 'clinic'; // Default section\
  nextSlide() {
    if (this.currentSlide < 3) {
      this.currentSlide++;
    }
  }

  closeCalibrateModal() {
    if (this.router.snapshot.parent.routeConfig.path === "doctor") {
      this.route.navigate(['/doctor/clinic']);
    }
    else {
      this.route.navigate(['/patient/patient-exercises']);
    }
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  updataData() {
    const data: caliberateData = {
      screenHeight: window.screen.availHeight.toString(),
      workingDistance: this.cmValue.toString(),
      colorCaliberation: {
        brightnessRed: this.brightnessValue.toString(),
        brightnessBlue: this.brightnessValue1.toString(),
      }
    }
    localStorage.setItem("caliberateData", JSON.stringify(data));
    this.closeCalibrateModal();
  }

  cmValue: number;
  inchesValue: number;

  private readonly CM_TO_INCHES = 0.393701;
  private readonly INCHES_TO_CM = 2.54;

  updateInches() {
    this.inchesValue = parseFloat((this.cmValue * this.CM_TO_INCHES).toFixed(2));
  }

  updateCm() {
    this.cmValue = parseFloat((this.inchesValue * this.INCHES_TO_CM).toFixed(2));
  }

  updateSlider(value: number) {
    this.cmValue = value;
    this.updateInches();
  }
  brightnessValue: number = 20; // Initial brightness value
  brightnessValue1: number = 20;

  // Method to calculate the RGB value based on brightness
  redDotColor(): string {
    const brightness = Math.round((this.brightnessValue / 100) * 255); // Scale 0-100 to 0-255
    return `rgb(${brightness}, 0, 0)`; // Adjust red value based on brightness
  }
  blueDotColor(): string {
    const brightness = Math.round((this.brightnessValue1 / 100) * 255); // Scale 0-100 to 0-255
    return `rgb(0, 0, ${brightness})`; // Adjust red value based on brightness
  }

  // Update brightness value from the slider
  onBrightnessChange(value: number): void {
    this.brightnessValue = value;
  }
  onBrightnessChange1(value: number): void {
    this.brightnessValue1 = value;
  }
  ContinueData() {
    this.currentSlide = this.currentSlide + 1;
  }
  selectImage(index: number) {
    this.selectedImageIndex = index;
    console.log(this.selectedImageIndex)
  }
}
