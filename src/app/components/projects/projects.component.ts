import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from './projects.model';
import { ProjectsService } from 'src/app/services/projects.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  message= ""
  projects: Project[] = []

  showChild = false

  constructor(private router: Router,
              private service: ProjectsService) { }

  ngOnInit(): void {
    let data = {"track":1}
    this.getProjects(history.state.data)
  }

  projectDetail(index: number){
    this.router.navigate(['/projects', index], {queryParams: {
      name: this.projects[index].name,
      owner: this.projects[index].owner,
      description: this.projects[index].description,
      github_link: this.projects[index].github_link,
      technologies: this.projects[index].technologies,
      track: this.projects[index].track.name,
      image: this.projects[index].image,

    }})
  }

  getProjects(data:any){
    this.service.getProjects(data).subscribe(data => {
    //  console.log(data)
     this.projects = Object.values(data)
    }, error => {
      this.message = `you are not logged in ${error}`
    })
  }
}
