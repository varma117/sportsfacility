import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SignuppageComponent } from './components/signuppage/signuppage.component';
import { AboutComponent } from './components/about/about.component';
import { BookfacilityComponent } from './components/bookfacility/bookfacility.component';
import { UpdateplayerdetailsComponent } from './components/updateplayerdetails/updateplayerdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    NavbarComponent,
    HomepageComponent,
    SignuppageComponent,
    AboutComponent,
    BookfacilityComponent,
    UpdateplayerdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
