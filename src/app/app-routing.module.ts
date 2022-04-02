import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
 {
  path: 'profile',
  component: ProfileComponent
 },
 {
   path: 'add-project', component: AddProjectComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
