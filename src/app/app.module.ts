import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {OffersService} from './offers.service';
import {ProductsService} from './products.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule


  ],
  providers: [ProductsService, OffersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
