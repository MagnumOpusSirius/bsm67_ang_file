import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {
  @Output('clickable') clickEvent = new EventEmitter<string>();
  constructor() {  
  }
  onClickedIrfan() {
    alert('event binding works!')
    this.clickEvent.emit('$event custom event fired');
  }
  
}
