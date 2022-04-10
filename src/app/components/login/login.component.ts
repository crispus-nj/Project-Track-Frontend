import { Component,ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@ViewChild('loginForm') signin : NgForm;
// loginModel = new Login('trevin@gmail.com', 'password')

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(){
    // console.log(this.loginModel)
    console.log(this.signin.value.password,
    this.signin.value.email,this.signin.value.password);
    this.signin.reset()
  }

}
