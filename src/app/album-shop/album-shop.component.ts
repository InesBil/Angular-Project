import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../album-list/Album';
import { AlbumShopService } from '../album-shop.service';


@Component({
  selector: 'app-album-shop',
  templateUrl: './album-shop.component.html',
  styleUrls: ['./album-shop.component.scss']
})
export class AlbumShopComponent implements OnInit {

  shopList$!: Observable<Album[]>;
  albums: Album [] = [];

  constructor(private cart:AlbumShopService) {
    this.shopList$ = cart.shopList.asObservable();        
   }

  ngOnInit(): void{    
    this.cart.shopList.subscribe(albums => this.albums = albums);
  }

  total(){    
    let sum=0;
    this.albums.forEach(album => {
      sum += album.quantity * album.price;      
    });
    return sum;    
  }

  emptyCart():void {
    this.total(); 
    this.cart.clearCart();  
  }
  
}
