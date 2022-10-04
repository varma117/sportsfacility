import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SignuppageComponent } from './components/signuppage/signuppage.component';
import { AboutComponent } from './components/about/about.component';
import { BookfacilityComponent } from './components/bookfacility/bookfacility.component';
import { UpdateplayerdetailsComponent } from './components/updateplayerdetails/updateplayerdetails.component';

const routes: Routes = [{path:'login',component:LoginpageComponent},
{path:'home',component:HomepageComponent},
{path:'signup',component:SignuppageComponent},
{path:'about',component:AboutComponent},
{path:'facility',component:BookfacilityComponent},
{path:'updatedetails',component:UpdateplayerdetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
