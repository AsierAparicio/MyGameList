import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/Videojuego.interfaces';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: [`./game-card.component.css`]
  
})
export class GameCardComponent implements OnInit {
  @Input() juego!: Result;
  listas: { icon: string, nombre: string }[] = [
    { icon : "favorite", nombre : "Seguidos"},
    { icon : "watch_later", nombre : "Más tarde"},
    { icon : "clear", nombre : "Abandonados"},]
  constructor() { }

  ngOnInit() {
  }

  getColor(): { color: string } {
    if (this.juego.metacritic == null) {
      return { color: 'gray' };
    } else if (this.juego.metacritic >= 85) {
      return { color: 'green' };
    } else if (this.juego.metacritic <= 84) {
      return { color: 'yellow' };
    } else if(this.juego.metacritic <= 50){
      return { color: 'red' };
    }else{
      return { color: 'grey' };;
    }
  }

}
