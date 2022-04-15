import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {

  constructor( private http:HttpClient) { }

  getProjects(){
   return this.http.get("http://127.0.0.1:8000/api/projects/projects/")
  }
}
