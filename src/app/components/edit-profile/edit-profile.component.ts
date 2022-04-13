import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from '../profile/profile.model';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers: [ProfileService]
})
export class EditProfileComponent implements OnInit {

  profile: Profile[];
  // profile: any
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfile()
    // console.log(this.profileService.getProfile())
  }
}