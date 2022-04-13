import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthserviceService],
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm') signup: NgForm;

  constructor(private AuthService: AuthserviceService,private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    // console.log(
    const password = this.signup.value.password;
    const email = this.signup.value.email;
    //  this.signup.value.confirmPassword,
    const username = this.signup.value.username;
    // const first_name = this.signup.value.first_name;
    // const last_name = this.signup.value.last_name;
    const first_name = "john";
    const last_name = "mwenza";
    // );
    this.AuthService.registerUser(email,password,username,first_name,last_name).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl("/login");

    },error => {
      console.log(error);
    });
    // this.signup.reset();
  }
}
