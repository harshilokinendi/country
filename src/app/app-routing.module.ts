import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ColorComponent } from './color/color.component';
import { UserComponent } from './user/user.component';
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'color',component:ColorComponent},
  {path: 'country',component:CountryComponent},
  {path: 'user',component:UserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
