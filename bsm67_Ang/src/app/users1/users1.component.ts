import { Component } from '@angular/core';
import { User1 } from '../model/User1';
import { User1Service } from '../service/user1.service';

@Component({
  selector: 'app-users1',
  templateUrl: './users1.component.html',
  styleUrls: ['./users1.component.css']
})
export class Users1Component {
  users1List:User1[] = [];

  constructor(private userService: User1Service) { 
      this.userService.getAllUsers1().subscribe(result=>{
      this.users1List=result;
      console.log(result);
    });
  }
}
