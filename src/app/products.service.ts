import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
products : [{}];
  constructor() {
    this.products = [
      {id : 1, name : 'apple', price : 0.25},
      {id : 2, name : 'orange', price : 0.30},
      {id : 3, name : 'garlic', price : 0.15},
      {id : 4, name : 'papaya', price : 0.50}];

  }

  public getProducts(){
    return this.products;
  }

}
