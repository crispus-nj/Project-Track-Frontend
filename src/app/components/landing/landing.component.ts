import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor( private route: Router) { }

  ngOnInit(): void {
  }
  project() {
    this.route.navigate(['/add-project'])
  }
  projects() {
    this.route.navigate(['/projects'])

  }

}
