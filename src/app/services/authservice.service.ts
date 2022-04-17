import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from "./user.model";

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
   
  user:User

  baseUrl = 'http://127.0.0.1:8000';
  
  token = window.localStorage.getItem("userToken")

  constructor(private http: HttpClient) {}

  loginUser(email: string, password: string) {
    return this.http.post(this.baseUrl + '/api/users/token/', {
      email,
      password,
    });
  }
  registerUser(
    email: string,
    password: string,
    username: string,
    first_name: string,
    last_name: string
  ) {
    return this.http.post(this.baseUrl + '/api/users/create/', {
      username,
      email,
      password,
      first_name,
      last_name,
    });
  }
  currently_logged_user(){
    this.http.get("http://127.0.0.1:8000/api/users/user/", {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Token ${this.token}`,
      
      }),
    }
    ).subscribe((res:any) => {
      this.user  =  res
      console.log(this.user.username)
    })

  }

  loggedIn(){
    return !!localStorage.getItem('userToken');
  }
}
