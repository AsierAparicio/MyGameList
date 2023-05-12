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
    if (this.genero != '' && this.plataforma != ''){
      this.filtroGeneroPlataforma()
    }else if (this.genero != ''){
      this.filtroGenero()
    }else if (this.plataforma != ''){
      this.filtroPlataforma()
    }else{
      this.gameService.getGames(this.num).subscribe(data => {
        this.juegos = data.results
      });
    }
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

  filtroGenero() {
    this.gameService.getFiltroGenero(this.num, this.genero).subscribe(data => {
      this.juegos = data.results
    });
  }

  filtroPlataforma() {
    this.gameService.getFiltroPlataforma(this.num, this.plataforma).subscribe(data => {
      this.juegos = data.results
    });
  }

  filtroGeneroPlataforma() {
    this.gameService.getFiltroPlataformaGenero(this.num, this.genero, this.plataforma).subscribe(data => {
      this.juegos = data.results
    });
  }

  filtrar() {
    this.num = 1
    this.cargar()
  }
  
  genero = '';
  plataforma = '';

}
