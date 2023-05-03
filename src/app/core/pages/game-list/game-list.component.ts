import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Result } from 'src/app/interfaces/Videojuego.interfaces';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styles: [`
    .botonera{
      display: flex;
      justify-content: center;
    }
    .num{
      margin-top:1.5%;
    }
      button{
      margin:1%;
    }
    * {background-color: #da4167}
  `]
})
export class GameListComponent implements OnInit {

  constructor(private gameService: GameService) { }
  juegos: Result[] = []
  num: number = 1
  ngOnInit(): void {
    this.cargar()
  }

  cargar() {
    this.gameService.getGames(this.num).subscribe(data => {
      this.juegos = data.results
    });
  }

  siguiente() {
    this.num++
    this.cargar()
  }

  anterior() {
    if (this.num === 1) {
      return;
    }
    this.num--
    this.cargar()
  }

}
