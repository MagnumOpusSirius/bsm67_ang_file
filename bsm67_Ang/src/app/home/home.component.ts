import { Component } from '@angular/core';
import { Customer } from './Customer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  msg:string="welcome to angular";
  display():string{
    return "this is display method";
  }
  customerObj:any={
    code:1001,
    name:"Ravi",
    amount: 12000
  };
  custObj: Customer = new Customer();

  userdetails: any = {
    username: "",
    password: ""
  };
  status: string = "";

  loginMe(): void{
    alert("Login Me Called...");
    console.log(this.userdetails);

    if(this.userdetails.username == "admin" && this.userdetails.password == "admin"){
      console.log(this.status = "Login Success");
      alert('Status: ' + this.status);
    }
    else{
      console.log(this.status = "Login Fail");
      alert('Status: ' + this.status);
    }
  }
}
