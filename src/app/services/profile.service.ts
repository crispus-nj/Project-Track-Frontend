import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../components/profile/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  token= window.localStorage.getItem('userToken')
  httpOptions:any
  profileUrl= "http://127.0.0.1:8000/api/users/me/"
  
  constructor(private http: HttpClient) { 
    this.httpOptions= new HttpHeaders({'content-type':'application/json'})
  }
    getAll(): Observable<Profile[]> {
      return this.http.get<Profile[]>(this.profileUrl);
    }
    getProfile(){
      this.http.get(`${this.profileUrl}`,this.httpOptions).subscribe((data) =>{
        this.httpOptions= new HttpHeaders
        ({
          'content-type':'application/json',
          'Authorization':'Token'+this.token})
          console.log(data)
      });
      
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
   
  