import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WhiteBackgroundComponent } from './components/buttons/white-background/white-background.component';
import { GreenBackgroundComponent } from './components/buttons/green-background/green-background.component';
import { HomeComponent } from './pages/home/home.component';
import { NewAppointmentComponent } from './components/modals/new-appointment/new-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WhiteBackgroundComponent,
    GreenBackgroundComponent,
    HomeComponent,
    NewAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
