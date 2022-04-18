import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { SingleProjectComponent } from './components/single-project/single-project.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectsService } from './services/projects.service';
import { ProjectPipe } from './project.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    NavbarComponent,
    LandingComponent,
    ProfileComponent,
    EditProfileComponent,
    AddProjectComponent,
    RegisterComponent,
    LoginComponent,
    SingleProjectComponent,
    AboutComponent,
    ButtonComponent,
    ProjectPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
