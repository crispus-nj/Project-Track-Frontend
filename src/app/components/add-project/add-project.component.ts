import { OpaqueValue } from '@angular/compiler/src/compiler_facade_interface';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Stack } from './stack.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit { 
  text!: string;
  file!: OpaqueValue;

stack: Stack[] = []

description:string = ''
@ViewChild('form') addproject: NgForm

  constructor(private route:Router, private httpService: ProjectsService
    ) { }


  ngOnInit(): void {
  }

  onSubmit(){
   const name = this.addproject.value.name
   const description = this.addproject.value.description
   const image = this.addproject.value.image
   const github_link = this.addproject.value.github_link
   const track_id = this.addproject.value.track.id
   const technologies = this.addproject.value.technologies
    // console.log("jina",name, "Description",description, "picha",image, "link",github_link, "tracks",track, "tech",technologies)
    this.httpService.postProjects(name, description, image, track_id, technologies, github_link).subscribe(res=> {
      this.route.navigate(['/'])
    })
    this.addproject.reset()
  }

  getStacks(){
    this.httpService.getStack().subscribe(data => {
      // console.log((data)) 
      this.stack = Object.values(data)
      console.log(this.stack)
    })
  }


}