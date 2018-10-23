import {Component} from "@angular/core"
import { DataService } from "../services/data.service";

@Component({
    selector: 'my-component-1',
    template: `
        <h1>Scenario 2</h1>
        <div>
            <input type="text" #input>
            <button (click)= "onAddItem(input.value)">Add data</button>
            <br>
            <br>
        </div>    
    `,
    providers:[]
})

export class Component1Component{
    _data: String;

    constructor(){}

    onGetData(){
        return this._data;
    }

    onAddItem(data: string){
        this._data = data;
        console.log('Message From HTML :', this._data)
    }


}