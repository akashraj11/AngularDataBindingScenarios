import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-2',
  template: `
  <p> Message From Parent in Child: {{ childMessage }} </p>
  `,
  styleUrls: []
})
export class Component2Component {

  @Input() childMessage: string;

  constructor() { }

}