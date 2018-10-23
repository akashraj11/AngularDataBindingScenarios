import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private currentMessage : string;

  constructor() { }

  changeMessage(message: string) {
    this.currentMessage = message;
  }

  getData(){
        return this.currentMessage;
  }
    



}