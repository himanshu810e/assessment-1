import { Injectable } from '@angular/core';

@Injectable()
export class OffersService {
offers : {};
  constructor() {
    this.offers = {'4': { 'title': 'Buy 3 papaya at the price of two' , 'applicableonqty' : 3, 'price' : 1.0}};
  }

  public getOffers(){
    return this.offers;
  }

}
