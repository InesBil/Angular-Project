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
      stock: 200,
      clearance: false,    
    },
    {
      image: './assets/images/Tranquility_Base_Hotel_Casino.jpg',
      album: 'Tranquility Base Hotel & Casino',
      year: 2018,
      price: 3500,
      stock: 200,
      clearance: true,    
    },
    {
      image: './assets/images/AM.jpg',
      album: 'AM',
      year: 2013,
      price: 3500,
      stock: 0,
      clearance: false,    
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
