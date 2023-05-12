import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Result } from 'src/app/interfaces/Videojuego.interfaces';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: [`./game-list.component.css`]
})
export class GameListComponent implements OnInit {

  constructor(private gameService: GameService) { }
  juegos: Result[] = []
  num: number = 1
  ngOnInit(): void {
    this.cargar()
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  cargar() {
    if (this.genero != '' && this.plataforma != ''){
      if(this.orden === 'relevancia'){
        this.filtroGeneroPlataforma()
      }else if ( this.orden === 'puntuacion'){
        this.ordenPuntuacionGeneroPlataforma()
      }else if ( this.orden === 'fecha'){
        this.ordenFechaGeneroPlataforma()
      }
    }else if (this.genero != ''){
      if(this.orden === 'relevancia'){
        this.filtroGenero()
      }else if ( this.orden === 'puntuacion'){
        this.ordenPuntuacionGenero()
      }else if ( this.orden === 'fecha'){
        this.ordenFechaGenero()
      }
    }else if (this.plataforma != ''){
      if(this.orden === 'relevancia'){
        this.filtroPlataforma()
      }else if ( this.orden === 'puntuacion'){
        this.ordenPuntuacionPlataforma()
      }else if ( this.orden === 'fecha'){
        this.ordenFechaPlataforma()
      }
    }else{
      if(this.orden === 'relevancia'){
        this.default()
      }else if ( this.orden === 'puntuacion'){
        this.ordenPuntuacion()
      }else if ( this.orden === 'fecha'){
        this.ordenFecha()
      }
    }
  }

  default(){
    this.gameService.getGames(this.num).subscribe(data => {
      this.juegos = data.results
    });
  }

  siguiente() {
    this.num++
    this.cargar()
    this.scrollToTop()
  }

  anterior() {
    if (this.num === 1) {
      return;
    }
    this.num--
    this.cargar()
    this.scrollToTop()
  }

  filtrar() {
    this.num = 1
    this.cargar()
  }

  //BASE FILTROS-----------------------------------------------------------------------------------------
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

//ORDEN FECHA FILTROS-----------------------------------------------------------------------------------------
  ordenFechaGenero() {
    this.gameService.getLastGamesGenero(this.num, this.genero).subscribe(data => {
      this.juegos = data.results
    });
  }

  ordenFechaPlataforma() {
    this.gameService.getLastGamesPlataforma(this.num, this.plataforma).subscribe(data => {
      this.juegos = data.results
    });
  }

  ordenFechaGeneroPlataforma() {
    this.gameService.getLastGamesPlataformaGenero(this.num, this.genero, this.plataforma).subscribe(data => {
      this.juegos = data.results
    });
  }

//ORDEN PUNTUACION FILTROS-----------------------------------------------------------------------------------------
  ordenPuntuacionGenero() {
    this.gameService.getBestGamesGenero(this.num, this.genero).subscribe(data => {
      this.juegos = data.results
    });
  }

  ordenPuntuacionPlataforma() {
    this.gameService.getBestGamesPlataforma(this.num, this.plataforma).subscribe(data => {
      this.juegos = data.results
    });
  }

  ordenPuntuacionGeneroPlataforma() {
    this.gameService.getBestGamesPlataformaGenero(this.num, this.genero, this.plataforma).subscribe(data => {
      this.juegos = data.results
    });
  }

//BASE ORDEN-----------------------------------------------------------------------------------------
  ordenPuntuacion() {
    this.gameService.getBestGames(this.num).subscribe(data => {
      this.juegos = data.results
    });
  }

  ordenFecha() {
    this.gameService.getLastGames(this.num).subscribe(data => {
      this.juegos = data.results
    });
  }
  
  genero = '';
  plataforma = '';
  orden = 'relevancia';

}
