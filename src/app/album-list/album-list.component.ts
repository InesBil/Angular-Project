import { Component, OnInit } from '@angular/core';
import { AlbumShopService } from '../album-shop.service';
import { Album } from './Album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent implements OnInit {

  albums: Album [] = [
    {
      image: './assets/images/The_Car.jpg',
      album: 'The Car',
      year: 2022,
      price: 3500,
      stock: 10,
      clearance: false,
      quantity: 0,    
    },
    {
      image: './assets/images/Tranquility_Base_Hotel_Casino.jpg',
      album: 'Tranquility Base Hotel & Casino',
      year: 2018,
      price: 3500,
      stock: 8,
      clearance: true,
      quantity: 0,     
    },
    {
      image: './assets/images/AM.jpg',
      album: 'AM',
      year: 2013,
      price: 3500,
      stock: 0,
      clearance: false,
      quantity: 0,     
    },
  ];

  constructor(private cart:AlbumShopService) {}

  ngOnInit(): void {}

  addToCart(album: Album): void{
    this.cart.addToCart(album);
    album.stock -= album.quantity;
    album.quantity = 0;
  }

  maxReached(m: string){
    alert(m);
  }
  
}


