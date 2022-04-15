import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }
  getProjects() {
    return this.http.get("http://127.0.0.1:8000/api/projects/projects/")
  }
  getStack() {
    return this.http.get("http://127.0.0.1:8000/api/track/track-selection/")
  }

  postProjects(name: string, description: string, image: string, track_id: number, technologies: string, github_link: string) {
    return this.http.post("http://127.0.0.1:8000/api/projects/projects/",
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
