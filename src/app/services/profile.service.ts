import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  projectUrl= 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  // getProfile(): Observable
}
