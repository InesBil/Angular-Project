import { Injectable } from '@angular/core';
import { Album } from './album-list/Album';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AlbumShopService {

  private _shopList: Album [] = [];
  
  shopList: BehaviorSubject<Album[]> = new BehaviorSubject (this._shopList);

  constructor() { }

  addToCart(album: Album){
    let item: Album = this._shopList.find((v1)=> v1.album == album.album)!;
    if(!item){
      this._shopList.push({ ... album });
    }
    else{
      item.quantity += album.quantity;
    }
    console.log(this._shopList);
    this.shopList.next(this._shopList);
  }

  
}
