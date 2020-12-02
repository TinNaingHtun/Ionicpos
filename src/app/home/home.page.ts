import { Component, OnInit } from "@angular/core";
import { ModalController } from '@ionic/angular';
import {AddItemHomePage} from '../add-item-home/add-item-home.page';
import {EditItemHomePage} from '../edit-item-home/edit-item-home.page';
import {BuyItemService} from '../services/but-item.service';
import { ActionSheetController } from '@ionic/angular';
import {
  BarcodeScanner,
  BarcodeScannerOptions,
} from "@ionic-native/barcode-scanner/ngx";
import { NavController } from "@ionic/angular";
import { AlertController } from '@ionic/angular';



@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
 
  buyItemList = [];
  scanData: {};
  options: BarcodeScannerOptions;
  constructor(
    private barcodeScanner: BarcodeScanner,
    private modalController: ModalController,
    private buyItemService: BuyItemService,
    private navCtrl: NavController,
    private actionSheetController: ActionSheetController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {}
  async showModal(){
    const modal=await this.modalController.create({
      component:AddItemHomePage,
      cssClass: 'my-modalCss',
    });
    modal.onDidDismiss().then(data=>{
      this.buyItemList=this.buyItemService.getItemList();
      console.log(this.buyItemList);
    })
    return await modal.present();
  }
  async showEditModal(item){
    const modal=await this.modalController.create({
      component:EditItemHomePage,
      cssClass: 'my-modalCss',
      componentProps: {
        'items': item
      }
    });
    modal.onDidDismiss().then(data=>{
      this.buyItemList=this.buyItemService.getItemList();
      console.log(this.buyItemList);
    })
    return await modal.present();
  }
  async editSaleItem(item){
    
    const actionSheet =await this.actionSheetController.create({
      header:'Options',
      cssClass: 'editText',
      buttons: [
       
        {
          text: 'Edit',
          icon: 'pencil-outline',
          cssClass: 'editIcon',
          handler: () => {
             this.showEditModal(item)
            }
          },
          {
            text: 'Delete',
            role: 'destructive',
            icon: 'trash-outline',
            cssClass: 'editIcon',
            handler: () => {
               this.buyItemService.popItem(item); 
              }
            },
      ]
    });
    await actionSheet.present();
   actionSheet.onDidDismiss().then(data=>{
     this.buyItemList=this.buyItemService.getItemList();
     console.log(this.buyItemList);
   })
  }
  next() {
    this.navCtrl.navigateForward('total-price');
  }

  async handleClear(){
   
    let alert = await this.alertCtrl.create({
      header: 'Clear All',
      message: 'Do you want to clear all this items?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.alertCtrl.dismiss();
          }
        },
        {
          text: 'Clear',
          handler: () => {
            this.buyItemService.clearItemList();
            this.buyItemList=this.buyItemService.getItemList();
          }
        }
      ]
    });
     await alert.present();
  }
  
}
