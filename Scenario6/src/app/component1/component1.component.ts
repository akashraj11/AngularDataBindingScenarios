import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'component-1',
  template: `
    {{message}}
    <br>
    <br>
    <component-2></component-2>
    <br>
    <br>
    <component-3></component-3>
  `,
  styleUrls: []
})
export class Component1Component implements OnInit {

  message= " Parent Component 1 Message displayed";

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

}
