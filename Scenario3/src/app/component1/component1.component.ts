import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-1',
  template: `
  <input type="text" #input>
  <button (click)= "onAddItem(input.value)">Transfer to Child</button>
  <component-2 [childMessage]="parentMessage"></component-2>
  `,
  styleUrls: [ ]
})
export class Component1Component{
  parentMessage : string;
  constructor() { }

    onAddItem(data: string){
        this.parentMessage = data;
    }
}