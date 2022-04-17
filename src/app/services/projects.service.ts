import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  token = window.localStorage.getItem("userToken")
  
  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get("http://127.0.0.1:8000/api/projects/projects/",{
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Token ${this.token}`,
        }),
      // withCredentials:true
    })
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
