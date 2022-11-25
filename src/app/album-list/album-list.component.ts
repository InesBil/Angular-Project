import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss'],
})
export class AlbumListComponent implements OnInit {
  album = {
    image: './assets/images/The_Car.jpg',
    album: 'The Car',
    anio: '2022',
    precio: 3500,
    stock: 200,
  };

  constructor() {}

  ngOnInit(): void {}
}
