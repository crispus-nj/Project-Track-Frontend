import { OpaqueValue } from '@angular/compiler/src/compiler_facade_interface';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit { 
  text!: string;
  file!: OpaqueValue;

description:string = ''
@ViewChild('form') addproject: ElementRef

  constructor() { }


  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.addproject)
    if(!this.text){
      alert('Please add project!!');
      return;
    }
  }


}