import { OpaqueValue } from '@angular/compiler/src/compiler_facade_interface';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit { 
  text!: string;
  file!: OpaqueValue;

description:string = ''
@ViewChild('form') addproject: NgForm

  constructor() { }


  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.addproject.value.name, this.addproject.value.member, this.addproject.value.link, this.addproject.value.file)
    this.addproject.reset()

    }
  


}