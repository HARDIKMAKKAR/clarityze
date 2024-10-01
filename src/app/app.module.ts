import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DoctorLandingPageComponent } from './doctor-landing-page/doctor-landing-page.component';
import { PatientLandingPageComponent } from './patient-landing-page/patient-landing-page.component';
// import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FeaturesComponent,
    AboutComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
    DoctorLandingPageComponent,
    PatientLandingPageComponent,
    // AdminLandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
