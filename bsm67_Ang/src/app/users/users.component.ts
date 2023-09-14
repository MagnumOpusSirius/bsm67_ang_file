import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  //message:string = '';
  usersList:User[] = [];

  constructor(private userService: UserService) { 
      this.userService.getAllUsers().subscribe(result=>{
      this.usersList=result;
      console.log(result);
    });
  }
}
