import { Component,Input, Output, EventEmitter,OnInit } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'component-2',
  template: `
    <input type ="text" #input>
    <button (click)="newMessage(input.value)">Sent Message from Component 2</button>
  `,
  styleUrls: []
})
export class Component2Component implements OnInit {

  message:string;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  newMessage(_data: string) {
    this._dataService.changeMessage(_data);
  }

}