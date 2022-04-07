import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

@ViewChild('registerForm') signup : NgForm;

  constructor() { }

  ngOnInit(): void {
  }

onSubmit(){
  console.log(this.signup.value.password,
    this.signup.value.email,this.signup.value.confirmPassword,this.signup.value.username);
    this.signup.reset()
}
}
