import { Component,Input, Output, EventEmitter,OnInit } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'component-3',
  template: `
    <button (click)="GetData()">Recieve Message in Sibling Component 3</button>
    <p>Message in Component 3 : {{message}}</p>
  `,
  styleUrls: []
})
export class Component3Component implements OnInit {

  message:string;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  GetData() {
    this.message = this._dataService.getData();
  }

}