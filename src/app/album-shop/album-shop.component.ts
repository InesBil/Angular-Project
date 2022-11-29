import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Album } from '../album-list/Album';
import { AlbumShopService } from '../album-shop.service';

@Component({
  selector: 'app-album-shop',
  templateUrl: './album-shop.component.html',
  styleUrls: ['./album-shop.component.scss']
})
export class AlbumShopComponent implements OnInit {

  shopList$!: Observable<Album[]>;

  constructor(private cart:AlbumShopService) {
    this.shopList$ = cart.shopList.asObservable();
    
   }

  ngOnInit(): void{
  
}

}


