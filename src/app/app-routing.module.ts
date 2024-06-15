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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  {path:'login', component: LoginComponent},
  { path: 'template', canActivate: [AuthGuard],component: SidenavComponent, children: [
    { path: 'profile', canActivate:[AuthGuard],component: ProfileComponent },
    {path: 'education', canActivate: [AuthGuard],component: EducationComponent},
    {path: 'experience',canActivate: [AuthGuard], component: ExperienceComponent},
    {path: 'contact-information', canActivate:[AuthGuard],component: ContactComponent}
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
