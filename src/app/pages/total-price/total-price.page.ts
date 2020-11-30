import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import {BuyItemService} from '../../services/but-item.service';

@Component({
  selector: 'app-total-price',
  templateUrl: './total-price.page.html',
  styleUrls: ['./total-price.page.scss'],
})
export class TotalPricePage implements OnInit {
  totalBalance = 0;
  totalResult = 0;
  promotion= 0;
  tax= 340;
  totalData: any;
  constructor(private navCtrl: NavController,private buyItemService: BuyItemService) { }

  ngOnInit() {
    
    this.totalData = this.buyItemService.getItemList();
  
    for (let data of this.totalData) {
      this.totalBalance = this.totalBalance + data.total;
      this.totalResult = this.totalBalance + this.promotion + this.tax;
    }
    console.log(this.totalData);
    console.log(this.totalBalance);
    console.log(this.totalResult);

  }
  back() {
    this.navCtrl.navigateBack('home');
  }

}