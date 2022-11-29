import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Album } from '../album-list/Album';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {
 
 constructor() {}

  ngOnInit(): void {}

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  upQuantity():void{
    if(this.quantity<this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.maxReached.emit("Se alcanzó el máximo!");
    }    
  }

  downQuantity():void{
    if(this.quantity>0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }      
  }

  chengeQuantity(event: { key: any; }): void{
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
  }

  // verifyAlbumQuantity(album:Album):void{
  //   if(album.quantity>album.stock){
  //     alert("No hay suficientes álbumes en stock");
  //   }
  //   if(album.quantity<0){
  //     alert("Ingrese un numero mayor a 0");
  //   }

  //   album.quantity = 0;
  // }

}
