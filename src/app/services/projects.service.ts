import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
  constructor(private http: HttpClient) { }

  getProjects(data:any) {
    return this.http.post("https://project-track-api.herokuapp.com/api/projects/getProjects", data)
  }

  getTracks() {
    return this.http.get("https://project-track-api.herokuapp.com/api/track/getTracks")
  }

  getStack() {
    return this.http.get("https://project-track-api.herokuapp.com/api/track/track-selection/")
  }

  postProjects(name: string, description: string, image: string, track_id: number, technologies: string, github_link: string) {
    return this.http.post("https://project-track-api.herokuapp.com/api/projects/projects/",
      {
        name,
        image,
        description,
        track_id,
        technologies,
        github_link
      })
  }
}
