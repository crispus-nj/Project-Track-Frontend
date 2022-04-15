import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { Stack } from './stacks.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  selectedStack = null
  stack: Stack[] = []
  @ViewChild("form") projectsForm: NgForm


  constructor(private httpService: ProjectsService, private route: Router) { }

  ngOnInit(): void {
    this.getStacks()
  }

  onSubmit() {
    console.log(this.projectsForm.value.track.name)
   const name = this.projectsForm.value.name
   const description = this.projectsForm.value.description
   const image = this.projectsForm.value.image
   const github_link = this.projectsForm.value.github_link
   const track_id = this.projectsForm.value.track.id
   const technologies = this.projectsForm.value.technologies
    this.httpService.postProjects(name, description, image, track_id, technologies, github_link).subscribe(res=> {
      this.route.navigate(['/'])
    })
    this.projectsForm.reset()
  }
  getStacks(){
    this.httpService.getStack().subscribe(data => {
      // console.log((data)) 
      this.stack = Object.values(data)
      console.log(this.stack)
    })
  }
}
