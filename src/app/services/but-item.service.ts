import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuyItemService {
  itemList=[];
  constructor() { }
  addItemList(item){
    this.itemList=this.itemList.concat(item);
  }
  getItemList(){
    return this.itemList;
  }
  popItem(item){
    this.itemList= this.itemList.filter(i=>i.code !== item.code);
    console.log(this.itemList);
  }
  updateItemList(item){
    let index=this.itemList.findIndex(i=>i.code == item.code);
    this.itemList[index]=item;
  }
}
