import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-1',
  template: `
  <component-2 (messageEvent)="receiveMessage($event)"></component-2>
  <br>
  Message in Parent from Child: {{parentMessage}}
  `,
  styleUrls: [ ]
})
export class Component1Component{
  parentMessage : string;
  constructor() { }
    receiveMessage($event) {
      this.parentMessage = $event
    }


} 
