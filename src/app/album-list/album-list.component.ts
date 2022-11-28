import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}

  upQuantity(album:Album):void{
    if(album.quantity<album.stock){
      album.quantity++;
    }    
  }

  downQuantity(album:Album):void{
    if(album.quantity>0){
      album.quantity--;
    }     
  }

  verifyAlbumQuantity(album:Album):void{
    if(album.quantity>album.stock){
      alert("No hay suficientes álbumes en stock");
    }
    if(album.quantity<0){
      alert("Ingrese un numero mayor a 0");
    }
    album.quantity = 0;
  }

}


