import { OpaqueValue } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit { 
  text!: string;
  file!: OpaqueValue;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('Please add project!!');
      return;
    }
  }


}
