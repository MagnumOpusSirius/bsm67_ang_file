import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/User';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  id: any;
  userdetails: User= new User();
  constructor(private router: ActivatedRoute, private userService: UserService) {
    this.id = this.router.snapshot.paramMap.get('id');
    console.log(this.id);
    this.userService.getUserById(this.id).subscribe(result=>{
      this.userdetails = result;
      console.log(result);
    }); 
  }
}
