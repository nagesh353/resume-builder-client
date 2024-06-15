import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SignupComponent } from './signup/signup.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ContactComponent } from './contact/contact.component';
import { AwardComponent } from './award/award.component'; 
import {MatIconModule} from '@angular/material/icon'; 
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    SidenavComponent,
    ProfileComponent,
    EducationComponent,
    ExperienceComponent,
    ContactComponent,
    AwardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientModule
    

    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
