import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SingleProjectComponent } from './components/single-project/single-project.component';
import { LandingComponent } from './components/landing/landing.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AboutComponent } from './components/about/about.component';
import { AuthguardGuard } from './authguard.guard';




const routes: Routes = [
  {path: 'landing', component: LandingComponent, canActivate: [AuthguardGuard]},
  {path: "about", component: AboutComponent, canActivate: [AuthguardGuard]},
  {path: "projects", component: ProjectsComponent, canActivate: [AuthguardGuard]},
  {path: "add-project", component: AddProjectComponent, canActivate: [AuthguardGuard]},
  {path: "profile", component: ProfileComponent, canActivate: [AuthguardGuard]},
  {path: "edit-profile", component: EditProfileComponent, canActivate: [AuthguardGuard]},
  {path: "projects/:id", component: SingleProjectComponent, canActivate: [AuthguardGuard]},
  {path: 'register', component: RegisterComponent},
  {path: '', component: LoginComponent},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

