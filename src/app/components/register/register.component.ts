import { Component, OnInit, ViewChild } from '@angular/core';
import { Register } from 'src/app/register';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
@ViewChild('registerForm') signup : NgForm;
registerModel = new Register('trevin', 'trevin@gmail.com', 'trevin', 'trevin');

  constructor() { }

  ngOnInit(): void {
  }

onSubmit(){
  console.log(this.signup.value.password,
    this.signup.value.email,this.signup.value.confirmPassword,this.signup.value.username);
    this.signup.reset()
}
}
