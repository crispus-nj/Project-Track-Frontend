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

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: "about", component: AboutComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "add-project", component: AddProjectComponent},
  {path: "profile", component: ProfileComponent},
  {path: "edit-profile", component: EditProfileComponent},
  {path: "projects/:id", component: SingleProjectComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

