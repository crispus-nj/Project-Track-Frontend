import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor( private route: Router, private httpService: AuthserviceService) { }

  ngOnInit(): void {
    this.httpService.currently_logged_user()
  }
 
  project() {
    this.route.navigate(['/add-project'])
  }
  projects() {
    this.route.navigate(['/projects'])
  
  }

}
