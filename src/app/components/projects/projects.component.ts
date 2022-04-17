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
  projects: Project[] = [
    // {
    //   owner: "Crispus Njenga",
    //   category: "Android",
    //   project_name: "Instaclone",
    //   description: " consequuntur ratione sapiente fugit, dolorum quia veniam ab aut numquam deleniti exercitationem id voluptatum quod, eum, velit a.",
    //   repo_link: "string",
    //   technologies: "Vertex",
    //   image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202108/Instagram_0.jpg?ZZLGdE1PjohTO.aeUOUEQYBxAWLPgCGT&size=770:433"
    // },
    // {
    //   owner: "Trevin Livele",
    //   category: "Fullstack",
    //   project_name: "Awwards Clone",
    //   description: " consequuntur ratione sapiente fugit, dolorum quia veniam ab aut numquam deleniti exercitationem id voluptatum quod, eum, velit a.",
    //   repo_link: "string",
    //   technologies: "Python",
    //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5JsEji0FUljXO9hw-F6w916faIOfMrWPbHA&usqp=CAU"
    // },
    // {
    //   owner: "Fred Papa",
    //   category: "Fullstack",
    //   project_name: "Gallery App",
    //   description: " consequuntur ratione sapiente fugit, dolorum quia veniam ab aut numquam deleniti exercitationem id voluptatum quod, eum, velit a.",
    //   repo_link: "string",
    //   technologies: "Python",
    //   image: "data:image/jpeg;base64,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"
    // },
    // {
    //   owner: "Mwikali Kyalo",
    //   category: "Android",
    //   project_name: "Twitter Clone",
    //   description: " consequuntur ratione sapiente fugit, dolorum quia veniam ab aut numquam deleniti exercitationem id voluptatum quod, eum, velit a.",
    //   repo_link: "string",
    //   technologies: "Java",
    //   image: "https://techcrunch.com/wp-content/uploads/2019/09/twitter-hidden-replies1.png?w=730"
    // },
  ]

  showChild = false

  constructor(private router: Router,
              private service: ProjectsService) { }

  ngOnInit(): void {
    this.getProjects()
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

  getProjects(){
    this.service.getProjects().subscribe(data => {
    //  console.log(data)
     this.projects = Object.values(data)

     for (let data of this.projects){
        console.log((data['track'].name))
     }

    }, error => {
      this.message = `you are not logged in ${error}`
    })
  }
}
