import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private refreshWishlist = new Subject<void>();
  private _myFavourite: number =100;

  constructor() { }


  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  setMyFavouriteNum() {
    this._myFavourite += 1;
  }

  get myFavouriteNum() {
    return this._myFavourite;
  }

  /**
   * REFRESH GLOBAL DATA
   */
  get refreshWishlist$() {
    return this.refreshWishlist;
  }
  needRefreshWishlist$() {
    this.refreshWishlist.next();
  }

}
