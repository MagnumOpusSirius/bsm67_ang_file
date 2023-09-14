import { Component } from '@angular/core';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
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
