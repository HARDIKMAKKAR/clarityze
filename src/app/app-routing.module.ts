import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'features' , component : FeaturesComponent},
  {path : 'about' , component : AboutComponent},
  {path : 'pageNotFound' , component  :PageNotFoundComponent},
  {path : '**' , redirectTo : 'pageNotFound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
