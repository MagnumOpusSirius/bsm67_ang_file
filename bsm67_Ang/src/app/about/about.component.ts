import { Component } from '@angular/core';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  msg:string='';
  greet:string='';
  constructor(_customer:CustomerService){
    //disply in browser: This is Customer Service
    // console.log(_customer.msg);
    // console.log(_customer.display());
    this.msg=_customer.msg;
    this.greet=_customer.display();

  }
}
