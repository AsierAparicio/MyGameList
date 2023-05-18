import { Component, Input, OnInit } from '@angular/core';
import Valoracion from 'src/app/interfaces/Valoracion.interfaces';

@Component({
  selector: 'app-game-card-valoracion',
  templateUrl: './game-card-valoracion.component.html',
  styleUrls: [`../game-card/game-card.component.css`]
  
})
export class GameCardValoracionComponent implements OnInit {
  @Input() juego!: Valoracion;
  listas: { icon: string, nombre: string }[] = [
    { icon: "favorite", nombre: "Seguidos" },
    { icon: "watch_later", nombre: "Pendientes" },
    { icon: "clear", nombre: "Abandonados" },

  ]
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