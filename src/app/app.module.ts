import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { SingleProjectComponent } from './components/single-project/single-project.component';
import { ProjectsService } from './services/projects.service';
import { AuthInterceptor } from './services/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    LandingComponent,
    ProfileComponent,
    EditProfileComponent,
    AddProjectComponent,
    SingleProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProjectsService, {
    provide: HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
