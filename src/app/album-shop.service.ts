import { Injectable } from '@angular/core';
import { Album } from './album-list/Album';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AlbumShopService {

  private _shopList: Album [] = [];
  
  shopList: BehaviorSubject<Album[]> = new BehaviorSubject (this._shopList);

  public shopAlbum: Observable<Album[]> = this.shopList.asObservable();


  constructor() { }

  addToCart(album: Album){ 
    let item: Album | undefined = this._shopList.find((v1)=> v1.album == album.album);
    
    if(!item){
      this._shopList.push({ ... album });
    }
    else{
      if(album.quantity>0){
        item.quantity += album.quantity;
      }
    }
   
    this.shopList.next(this._shopList);
    return this._shopList;
  }

}
  






  
   
  
   


  

