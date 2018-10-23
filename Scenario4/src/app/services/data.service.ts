export class DataService{
private _data: String;

getData(){
    return this._data;
}

insertData(data: string){
    this._data = data;
}

}