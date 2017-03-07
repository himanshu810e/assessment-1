import { Component } from '@angular/core';
import {OffersService} from './offers.service';
import {ProductsService} from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : 'Shopping App';
  products = [];
  offers : {};
  showCatalog : boolean;
  orderObject : any;
  constructor(offerService : OffersService, public prodService : ProductsService){
    prodService.getProducts().forEach(item =>{
      this.products.push({item : item, quantity : 0});
    });
    this.offers = offerService.getOffers();
    this.showCatalog = true;
  };

  increaseQuantity(product){
    product.quantity += 1;
  };
  decreaseQuantity(product){
    if(product.quantity > 0){
      product.quantity -= 1;
    }
  };
  submitOrder(){
    this.showCatalog = false;
    let orderItems = [];
    let orderTotal = 0;
    this.products.forEach(item=>{
      if(item.quantity > 0){
        if(this.offers[item.item.id] && item.quantity >= this.offers[item.item.id].applicableonqty){
          let factor = Math.floor(item.quantity / this.offers[item.item.id].applicableonqty);
          let reminder = item.quantity % this.offers[item.item.id].applicableonqty;
          item['totalprice'] = factor * this.offers[item.item.id].price + reminder* item.item.price;
        }else{
          item['totalprice'] = item.quantity* item.item.price;
        }
        orderTotal += item['totalprice'];
        orderItems.push(item);
      }
    });
    this.orderObject = {
      name : 'John Smith',
      address : 'Lakeview 121, some city, CA',
      items : orderItems,
      total : orderTotal
    };
    this.showCatalog = false;

  }

  reload(){
    this.showCatalog = true;
    this.products = [];
    this.orderObject = null;
    this.prodService.getProducts().forEach(item =>{
      this.products.push({item : item, quantity : 0});
    });

  }

};
