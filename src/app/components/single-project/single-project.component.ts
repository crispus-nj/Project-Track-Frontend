import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css']
})
export class SingleProjectComponent implements OnInit {

  @ViewChild("form") commentForm : ElementRef
  constructor() { }

  ngOnInit(): void {
  }
  sendComment(){
    console.log(this.commentForm)
  }

}
