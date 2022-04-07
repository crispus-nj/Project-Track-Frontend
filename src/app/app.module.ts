import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule , routingComponents } from './app-routing.module'
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { SingleProjectComponent } from './components/single-project/single-project.component';
// <<<<<<< navbar
// import { AboutComponent } from './components/about/about.component';

// =======
// import { FormsModule } from '@angular/forms';
// >>>>>>> development

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
   routingComponents,
    NavbarComponent,
    LandingComponent,
    ProfileComponent,
    EditProfileComponent,
    AddProjectComponent,
    SingleProjectComponent,
// <<<<<<< navbar
//     AboutComponent,
// =======
// >>>>>>> development
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
