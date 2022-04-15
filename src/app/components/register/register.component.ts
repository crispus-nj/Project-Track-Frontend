import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private httpService: ProjectsService) { }

  ngOnInit(): void {
    this.httpService.getStack().subscribe(data => {
      console.log(data)
    })
  }

}
