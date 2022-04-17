import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  baseUrl = 'https://project-track-api.herokuapp.com/';

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
  loggedIn(){
    return !!localStorage.getItem('userToken');
  }
}
