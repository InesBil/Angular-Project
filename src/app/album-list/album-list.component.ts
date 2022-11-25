import { Component, OnInit } from '@angular/core';
import { Album } from './Album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent implements OnInit {
<<<<<<< HEAD

  albums: Album [] = [
    {
      image: './assets/images/The_Car.jpg',
      album: 'The Car',
      year: 2022,
      price: 3500,
      stock: 200    
    },
    {
      image: './assets/images/Tranquility_Base_Hotel_Casino.jpg',
      album: 'Tranquility Base Hotel & Casino',
      year: 2018,
      price: 3500,
      stock: 200    
    },
    {
      image: './assets/images/AM.jpg',
      album: 'AM',
      year: 2013,
      price: 3500,
      stock: 180    
    },
  ];
=======
  album = {
    image: './assets/images/The_Car.jpg',
    album: 'The Car',
    anio: '2022',
    precio: 3500,
    stock: 200,
  };
>>>>>>> 0d0cc02a0f377a3fc522708047113b503089f397

  constructor() {}

  ngOnInit(): void {}
}
