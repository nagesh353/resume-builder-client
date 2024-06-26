import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './auth.interceptor';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  {path:'login', component: LoginComponent},
  {path: 'template',
    component: SidenavComponent,
    children: [
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'education', component: EducationComponent, canActivate: [AuthGuard] },
      { path: 'experience', component: ExperienceComponent, canActivate: [AuthGuard] },
      { path: 'contact-information', component: ContactComponent, canActivate: [AuthGuard] }
    ],
    canActivate: [AuthGuard],
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
