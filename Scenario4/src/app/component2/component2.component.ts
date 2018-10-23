import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'component-2',
  template: `
  <input type="text" #input>
  <button (click)="sendMessage(input.value)">Send Child Message</button>
  `,
  styleUrls: []
})
export class Component2Component {
  childMessage: string ;
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }
  sendMessage(data: string) {
    this.childMessage = data;
    this.messageEvent.emit(this.childMessage)
  }

}