import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  test: string = 'starting value from test';
  boundValue: number = 2000;
  delete: boolean = false;
  onClickedIrfan(value: string) {
    alert(value+ ' data binding function!')
  }
  sayHello():void{
    alert('sayHello() called!');
  }
}
