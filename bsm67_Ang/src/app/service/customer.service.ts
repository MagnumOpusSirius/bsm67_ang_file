import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  msg: string= "This is Customer Service";

  display():string{
    return "This is display method";
  }
}
