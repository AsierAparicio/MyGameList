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
import { Location } from '@angular/common';
import { Timestamp } from 'firebase/firestore';
import {Inject} from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})


export class GameDetailComponent implements OnInit {
  listaSeleccionada!: string;
  contenidoTextarea!: string;
  userID=this.LoginService.getId();
  usuario=this.LoginService.getUser();
  rating:number=0;
  currentRating: number = 0;
  nota:number=0;
  currentUrl: string ="";
  auxGameId ?: string = "";
  ngLista: string = "0";
  fecha: Timestamp = Timestamp.now();

  valoracionesExter: Valoracion[] = [];

  game!: VideojuegoIndividual;
  constructor(
    private gameService:GameService,
    private LoginService:LoginService,
    private BbddService:BbddService,
    private activateRoute: ActivatedRoute,
    private location: Location,
    public dialog: MatDialog
  ) {
  }

  Valoracion: Valoracion = {
    background_image: 'https://example.com/image.png',
    name: 'Mi juego favorito',
    released: '2022-01-01',
    metacritic: 90,
    userID: this.userID,
    usuario: this.usuario,
    gameID: 1,
    valoracion: 5,
    critica: '¡Me encantó este juego! Tiene una historia increíble y una jugabilidad muy fluida.',
    listaID: 1,
    fechaValoracion: this.fecha,
  };

  ngOnInit(): void {
    this.activateRoute.params.
    pipe(
      switchMap(({id})=> this.gameService.getGamesById(id))).subscribe(game=>this.game=game)

    this.currentUrl = this.location.path();
    const parts = this.currentUrl.split("/");
    this.auxGameId = parts.pop(); // obtiene el último elemento del array

    console.log(this.auxGameId);

    if(this.auxGameId !== undefined){
      this.Valoracion.gameID = parseInt(this.auxGameId);
    }


    const respose= this.BbddService.selectGameAndUser(this.Valoracion);
        respose.then((objeto) => {
          if(objeto.length>=1){
            this.Valoracion = objeto[0];
            this.contenidoTextarea = this.Valoracion.critica;

            this.nota = this.Valoracion.valoracion;

            this.rating = this.nota;

            this.ngLista = this.Valoracion.listaID.toString();
            this.listaSeleccionada = this.ngLista;
          }else{
            console.log("nada");
          }

        }).catch((error) => {
          console.log(error); // Manejo de errores
        });

    const valoraciones= this.BbddService.selectValoracionesFromGame(this.Valoracion);
    valoraciones.then((obj) =>{
      obj.forEach(element => {
        this.valoracionesExter.push(element)

      });
    }
    )
    console.log(this.valoracionesExter)
  }

  getColor(): { color: string } {
    if (this.game.metacritic == null) {
      return { color: 'gray' };
    } else if (this.game.metacritic >= 85) {
      return { color: 'green' };
    } else if (this.game.metacritic <= 84 && this.game.metacritic >= 50) {
      return { color: 'yellow' };
    } else if(this.game.metacritic <= 50){
      return { color: 'red' };
    }else{
      return { color: 'grey' };;
    }
  }


  getColorFont(): { color: string } {
    if (this.game.metacritic == null) {
      return { color: 'white' };
    } else if (this.game.metacritic >= 85) {
      return { color: 'white' };
    } else if (this.game.metacritic <= 84 && this.game.metacritic >= 50) {
      return { color: 'black' };
    } else if(this.game.metacritic <= 50){
      return { color: 'white' };
    }else{
      return { color: 'white' };;
    }
  }

  onChange(event: any) {
    console.log(event)
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
      this.Valoracion.fechaValoracion=this.fecha;
      this.Valoracion.usuario=this.usuario;

      const respose=await this.BbddService.selectInsertUpdate(this.Valoracion);
      console.log(respose);

        let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
          width: '250px',
          data: { juego : this.Valoracion.name, user : this.Valoracion.usuario}
        });
      //redireccionar fuera con un mensaje de se a guardado correctamente
    }else{
      //añadir mensaje de que tienes que iniciar sesion
      //redireccionar al login
      console.log("maricon");

    }


  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onOkClick(): void {
    this.dialogRef.close();
  }

}
