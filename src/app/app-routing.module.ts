import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SingleProjectComponent } from './components/single-project/single-project.component';

const routes: Routes = [
  {path: "projects", component: ProjectsComponent},
  {path: "projects/:id", component: SingleProjectComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'profile',
    component: ProfileComponent
   },
   {
    path: 'add-project', component: AddProjectComponent
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [RegisterComponent,LoginComponent,]
