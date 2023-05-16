import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from 'src/app/interfaces/Videojuego.interfaces';
import { HttpClient } from '@angular/common/http';
import { GameService } from '../../services/game.service';
import { switchMap } from "rxjs";
import { VideojuegoIndividual } from 'src/app/interfaces/Videojuego_Individual.interface';
import { Meta } from '@angular/platform-browser';
import { BbddService } from '../../services/bbdd.service';
import Valoracion from 'src/app/interfaces/Valoracion.interfaces';
import valoracion from '../../../interfaces/Valoracion.interfaces';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})


export class GameDetailComponent implements OnInit {
  listaSeleccionada!: string;
  contenidoTextarea!: string;
  userID=this.LoginService.getId();
  rating:number=0;
  currentRating: number = 0;
  Valoracion: Valoracion = {
    background_image: 'https://example.com/image.png',
    name: 'Mi juego favorito',
    released: '2022-01-01',
    metacritic: 90,
    userID: 'mi_usuario',
    gameID: 123,
    valoracion: 5,
    critica: '¡Me encantó este juego! Tiene una historia increíble y una jugabilidad muy fluida.',
    listaID: 1
  };

  game!: VideojuegoIndividual;
  constructor(
    private gameService:GameService,
    private LoginService:LoginService,
    private BbddService:BbddService,

    private activateRoute: ActivatedRoute,

  ) {
  }
  ngOnInit(): void {
    this.activateRoute.params.
    pipe(
      switchMap(({id})=> this.gameService.getGamesById(id))).subscribe(game=>this.game=game)
  }
  getColor(): { color: string } {
    if (this.game.metacritic == null) {
      return { color: 'gray' };
    } else if (this.game.metacritic >= 85) {
      return { color: 'green' };
    } else if (this.game.metacritic <= 84) {
      return { color: 'yellow' };
    } else if(this.game.metacritic <= 50){
      return { color: 'red' };
    }else{
      return { color: 'grey' };;
    }
  }
  onChange(event: any) {
    this.listaSeleccionada = event.target.value;
  }

  onRatingChange(rating: number) {
    this.rating=rating;
  }
  async onSubmit(){
    console.log(this.game);
    if(this.userID!='0'){
    this.Valoracion.gameID=this.game.id;
    this.Valoracion.background_image=this.game.background_image;
    if(this.game.metacritic===null){
      this.Valoracion.metacritic=0;
    }else{
      this.Valoracion.metacritic=this.game.metacritic;
    }
      this.Valoracion.released=this.game.released.toString();
      this.Valoracion.listaID=parseInt(this.listaSeleccionada);
      this.Valoracion.userID=this.userID;
      this.Valoracion.valoracion=this.rating;
      this.Valoracion.name=this.game.name;
      this.Valoracion.critica=this.contenidoTextarea;
      const respose=await this.BbddService.selectInsertUpdate(this.Valoracion);
      console.log(respose);
      //redireccionar fuera con un mensaje de se a guardado correctamente
    }else{
      //añadir mensaje de que tienes que iniciar sesion
      //redireccionar al login
      console.log("maricon");

    }


  }
}
