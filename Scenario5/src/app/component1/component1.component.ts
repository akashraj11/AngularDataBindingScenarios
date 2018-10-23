import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'component-1',
  template: `
    <br>
    <br>
    <component-2></component-2>
    <button (click)="GetData()">Recieve Message in Sibling Component 3</button>
    <p>Message in Component 1 : {{message}}</p>
  `,
  styleUrls: []
})
export class Component1Component implements OnInit {

  message: string;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  GetData() {
    this.message = this._dataService.getData();
  }

}
