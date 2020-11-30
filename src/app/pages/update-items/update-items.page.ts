import { Component, OnInit } from "@angular/core";
import { HomePage } from "../../home/home.page";
import { ModalController, NavParams } from "@ionic/angular";
import { StorageService, Item } from "../../services/storage.service";
import { AlertController } from '@ionic/angular';
import {
  BarcodeScanner,
  BarcodeScannerOptions,
} from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: "app-update-items",
  templateUrl: "./update-items.page.html",
  styleUrls: ["./update-items.page.scss"],
})
export class UpdateItemsPage implements OnInit {
  items: Item[] = [];
  newItem: Item = <Item>{};
  dbData: any;
  options: BarcodeScannerOptions;
  scanData: any;
  scanDbData: any;

  constructor(
    private storageService: StorageService,
    public modalCtrl: ModalController,
    private navParams: NavParams,
    public alertCtrl: AlertController,
    private barcodeScanner: BarcodeScanner
  ) {}

  ngOnInit() {
    this.dbData = [
      {
        code: this.navParams.data.code,
        name: this.navParams.data.name,
        price: this.navParams.data.price,
      },
    ];
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

  // Update
  async updateItem(item: Item) {
    this.storageService.updateItem(item).then((item) => {
      this.loadItems();
    });
    let alert =await  this.alertCtrl.create({
      header: 'Updated Item',
      subHeader: 'successful',
      buttons: ['Save']
    });
    await  alert.present();
    this.modalCtrl.dismiss();
  }
  // Delete
  async delete(item: Item) {
    this.storageService.deleteItem(item.code).then((item) => {
      this.loadItems();
    });
    let alert =await  this.alertCtrl.create({
      header: 'Deleted Item',
      subHeader: 'successful',
      buttons: ['Save']
    });
    await  alert.present();
    this.modalCtrl.dismiss();
  }
  // Read
  loadItems() {
    this.storageService.getItems().then((items) => {
      this.items = items;
    });
  }
  scan() {
    this.storageService.getItemdata().then((res) => {
      this.scanDbData = res;
    });
    this.options = {
      prompt: "Scan your barcode",
    };
    this.barcodeScanner.scan(this.options).then(
      (barcodeData) => {
        this.scanData = barcodeData;
        for (let i = 0; i < this.scanDbData.length; i++){
          if (this.scanData.text == this.scanDbData[i].code) {
            this.dbData = [
              {
                code: this.scanDbData[i].code,
                name: this.scanDbData[i].name,
                price: this.scanDbData[i].price,
              },
            ];
            console.log(this.dbData);
          } else {
            console.log(this.scanDbData);
          }
        }
      },
      (err) => {
        console.log("Error occured : " + err);
      }
    );
  }

}
