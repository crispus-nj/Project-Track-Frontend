import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registerModel = new Register('trevin', 'trevin@gmail.com', 'trevin', 'trevin');

  constructor() { }

  ngOnInit(): void {
  }
onSubmit(){
  console.log('registerModel')
}
}
