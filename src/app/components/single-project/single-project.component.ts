import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../projects/projects.model';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css']
})
export class SingleProjectComponent implements OnInit {

  project : Project
  @ViewChild("form") commentForm : ElementRef
  constructor( private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(res=> {
      this.project = {
        category: res['category'],
        owner: res['owner'],
        project_name: res['category'],
        image: res['image'],
        repo_link: res['repo_link'],
        description: res['description'],
        technologies: res['technologies'],
      }
    })
  }
  sendComment(){
    console.log(this.commentForm)
  }

}
