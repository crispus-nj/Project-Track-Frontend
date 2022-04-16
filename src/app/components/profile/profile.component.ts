import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from './profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title: string = 'Profile Page'

  /*// pre-load details
  ProfileDetails: Profile; //import from interface
  IsProfileLoaded: boolean=false;


  //profile form properties

  updateProfileForm: FormGroup;
  userid: FormControl;
  email: FormControl;
  username: FormControl;
  birthdate: FormControl;
  gender: FormControl;
  displayname: FormControl;
  firstname: FormControl;
  lastname: FormControl;
  phone: FormControl;

  private genderValues =[
    'Male',
    'Female',
    'Trans-Gender',
    'Prefer not to say',
    'Other'
  ]*/

  profile$: Observable<Profile[]>

  constructor(
   // private fb : FormBuilder,
    //private acc: AccountService, //Methods updating the user profile
    //private toastr: ToastrService, //notifications to the user
    private route: Router,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    // this.profile$ = this.profileService.getProfile()
  }
    /*this.userid = new FormControl(this.profileDetails.userid, [Validators.required]);
    this.email = new FormControl(this.ProfileDetail.email, [Validators.required, Validators.email]);
    this.username = new FormControl(this.ProfileDetails.username, [Validators.required, Validators.maxLength(20),Validators.maxLength(10)]);
    this.phone = new FormControl(this.ProfileDetails.phone, [Validators.required, Validators.pattern('+254700000000')]);

    this.birthdate = new FormControl(this.ProfileDetails.birthdate, [Validators.required]);
    this.gender = new FormControl(this.ProfileDetails.gender);
    this.displayname = new FormControl(this.ProfileDetails.displayname, [Validators.required, Validators.maxLength(20)]);
    this.firstname = new FormControl(this.ProfileDetails.firstname, [Validators.required, Validators.maxLength(20), Validators.minLength(5)]);
    this.lastname = new FormControl(this.ProfileDetails.lastname, [Validators.required, Validators.maxLength(20), Validators.minLength(5)]);

    this.updateProfileForm =  this.fb.group({
      userid: this.userid,
      email: this.email,
      username: this.username,
      phone: this.phone,
      gender: this.gender,
      birthdate: this.birthdate,
      firstname: this.firstname,
      lastname: this.lastname,
      displayname: this.displayname


    })

  }*/
  
  profile() {
    this.route.navigate(['edit-profile'])
  }
}
function value(value: any, arg1: {}[]): Observable<Profile[]> {
  throw new Error('Function not implemented.');
}

