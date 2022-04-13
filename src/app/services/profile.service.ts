import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../components/profile/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profileUrl= "http://127.0.0.1:8000/api/users/create/"

  constructor(private http: HttpClient) { }
    getAll(): Observable<Profile[]> {
      return this.http.get<Profile[]>(this.profileUrl);
    }
    getProfile(id: number){
      return this.http.get(`${this.profileUrl}${id}`);
    }
    updateProfile(id: any, data: any){
      return this.http.put(`${this.profileUrl}/${id}`, data);
    }
    deleteProfile(id: any): Observable<any> {
      return this.http.delete(`${this.profileUrl}${id}`);
    }
    // findByUser(username: any): Observable<Profile[]> {
    //   return this.http.get<Profile[]>(`${this.profileUrl}?username=${username}`);
    // }
  }
   
  