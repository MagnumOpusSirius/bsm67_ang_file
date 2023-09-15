import { Component } from '@angular/core';
import { User1 } from '../model/User1';
import { ActivatedRoute } from '@angular/router';
import { User1Service } from '../service/user1.service';

@Component({
  selector: 'app-user1-details',
  templateUrl: './user1-details.component.html',
  styleUrls: ['./user1-details.component.css']
})
export class User1DetailsComponent {
  userId: any;
  userdetails1: User1= new User1();
  constructor(private router1: ActivatedRoute, private user1Service: User1Service) {
    this.userId = this.router1.snapshot.paramMap.get('userId');
    console.log(this.userId);
    this.user1Service.getUserById1(this.userId).subscribe(result=>{
      this.userdetails1 = result;
      console.log(result);
    }); 
  }
}
