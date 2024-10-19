import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DoctorLandingPageComponent } from './doctor-landing-page/doctor-landing-page.component';
import { PatientLandingPageComponent } from './patient-landing-page/patient-landing-page.component';
import { CaliberateComponent } from './caliberate/caliberate.component';
import { PatientExercisesComponent } from './patient-exercises/patient-exercises.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { ClinicComponent } from './clinic/clinic.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'features' , component : FeaturesComponent},
  {path : 'about' , component : AboutComponent},
  {path : 'pageNotFound' , component  :PageNotFoundComponent},
  {path  : 'login' , component : LoginComponent},
  {path : 'signup' , component : SignupComponent},
  {path : 'doctor' , component : DoctorLandingPageComponent , children : [
    {path : 'clinic' , component : ClinicComponent},
    {path : 'exercises-list' , component : ExerciseListComponent},
    {path : 'caliberate' , component : CaliberateComponent}
  ]},
  {path : 'patient' , component : PatientLandingPageComponent, children:[{
    path: 'caliberate', component: CaliberateComponent
  },
   {
    path: 'patient-exercises', component: PatientExercisesComponent
   }]
},
{path : 'admin' , component : AdminLandingPageComponent},
  {path : '**' , redirectTo : 'pageNotFound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
