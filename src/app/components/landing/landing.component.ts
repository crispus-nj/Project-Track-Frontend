import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor( private route: Router, 
    private httpService: AuthserviceService, private service: ProjectsService
    ) { }
  private message: string;
  tracks: any[] = [];

  ngOnInit(): void {
    this.httpService.currently_logged_user()
    this.getTracks()
  }
 
  project() {
    this.route.navigate(['/add-project'])
  }

  projects(track:any) {
    let params = {"track": track}
    this.route.navigate(['/projects'], {state: {"data":params}});
  }

  getTracks(){
    this.service.getTracks().subscribe(data => {
      this.tracks = Object.values(data)
    }, error => {
      this.message = `you are not logged in ${error}`
    })
  }

}
