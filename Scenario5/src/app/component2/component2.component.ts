import { Component,Input, Output, EventEmitter,OnInit } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'component-2',
  template: `
  <component-3></component-3>
  <p> Component 2 ! intermediate Component ! </p>
  `,
  styleUrls: []
})
export class Component2Component implements OnInit {

  message:string;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

}