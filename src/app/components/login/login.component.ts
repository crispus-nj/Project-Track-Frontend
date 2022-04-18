import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') signin: NgForm;
  // loginModel = new Login('trevin@gmail.com', 'password')

  displayError = false;
  errorMessage = ""
  token:any ;

  constructor(
    private AuthService: AuthserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogin() {
    this.AuthService.loginUser(
      this.signin.value.email,
      this.signin.value.password
    ).subscribe(
      (res) => {
        this.token = res;
        // this.token = this.token.token;
        // token = token.token;
        localStorage.setItem('userToken',this.token.token);
        this.router.navigateByUrl("/landing");
      },
      (error) => {
        // alert(error);
        this.errorMessage = error.error.non_field_errors;
        this.displayError = true; // disable patch
        console.log(error.error.non_field_errors);
      }
    );
    this.signin.reset();
  }
}
