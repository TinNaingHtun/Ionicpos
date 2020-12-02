import { Component, OnInit } from '@angular/core';
import {  ModalController } from '@ionic/angular';
import { FormControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {BuyItemService} from '../services/but-item.service';
import { BarcodeScanner,BarcodeScannerOptions} from "@ionic-native/barcode-scanner/ngx";
import {StorageService,Item} from '../services/storage.service';
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-edit-item-home',
  templateUrl: './edit-item-home.page.html',
  styleUrls: ['./edit-item-home.page.scss'],
})
export class EditItemHomePage implements OnInit {
  saleItem={
    code:"",
    name:"",
    price:"",
    qty:"",
    total:0
  }
  addItemToCart:FormGroup;
  scanData: {};
  options: BarcodeScannerOptions;
  buyItemList = [];
  buyItem;
  localItems: Item[] = [];
  itemIndex;
  constructor(
    public modalController:ModalController,
    private formBuilder:FormBuilder,
    private barcodeScanner: BarcodeScanner,
    private storageService:StorageService,
    private buyItemService:BuyItemService,
    public  navParams:NavParams
  ) {
    let items=navParams.get('items');
    console.log(items);
    this.saleItem.code=items.code;
    this.saleItem.name=items.name;
    this.saleItem.price=items.price;
    this.saleItem.qty=items.qty;
    this.saleItem.total=items.total;
    console.log(this.saleItem);
   }

  ngOnInit() {
    this.addItemToCart=this.formBuilder.group({
      code:new FormControl ("",[
          Validators.required
      ]),
      name : new FormControl("", [
        Validators.required,
      ]),
      qty : new FormControl("", [
        Validators.required,
      ]),
      price : new FormControl("", [
        Validators.required,
      ]),
    });
    this.storageService.getItemdata().then(res=>{
      this.localItems=this.localItems.concat(res) ; 
    });
    this.itemIndex= this.getItemIndex(this.saleItem);
      console.log(this.itemIndex);
  }
  public closeModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  cancel() {
    this.modalController.dismiss();
  }
  scan() {
    this.options = {
      prompt: "Scan your barcode",
    };
    this.barcodeScanner.scan(this.options).then(
      (barcodeData) => {
        this.scanData = barcodeData;
        console.log(this.scanData);
        this.buyItem = this.doesItemExit(this.scanData);
        if (this.buyItem) {
          // this.buyItemList.push(this.buyItem);
          // this.buyItemService.addItemList(this.buyItem);
          this.addItem(this.buyItem.code,this.buyItem.name,this.buyItem.price);
          
        }
      },
      (err) => {
        console.log("Error occured : " + err);
      }
    );
  }
  doesItemExit(item) {
    return this.localItems.find((i) => i.code == item.text);
  }
  addItem(code="",name="",price=""){
    this.saleItem.code=code;
    this.saleItem.price=price;
    this.saleItem.name=name;
  }
  qtyChange(){
    if(Number.isInteger(parseInt(this.saleItem.qty))){
      this.saleItem.total=parseInt(this.saleItem.qty) * parseInt(this.saleItem.price);
      if(Number.isNaN(this.saleItem.total)){
        this.saleItem.total=0;
      }
    }
    console.log(this.saleItem);
  }
  priceChange(){
    if(Number.isInteger(parseInt(this.saleItem.price))){
      this.saleItem.total=parseInt(this.saleItem.qty) * parseInt(this.saleItem.price);
      if(Number.isNaN(this.saleItem.total)){
        this.saleItem.total=0;
      }
    }
  }
  editItemToHome(){
    if(this.saleItem.code && this.saleItem.qty && this.saleItem.name && this.saleItem.price){
      let item={text:this.saleItem.code}
      if(this.doesItemExit(item)){
        this.buyItemService.updateItemList(this.saleItem);
        this.closeModal();
      }
    } 
    else{
      console.log("Not");
    }
  }
  getItemIndex(item){
    this.buyItemList= this.buyItemService.getItemList();
    console.log(this.buyItemList);
    console.log(item);
    return this.buyItemList.findIndex((i)=>i.code ==item.code);
  }
}