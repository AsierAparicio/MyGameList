import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/Videojuego.interfaces';
import Valoracion from 'src/app/interfaces/Valoracion.interfaces';
import { LoginService } from '../../../core/services/login.service';
import { BbddService } from '../../../core/services/bbdd.service';
import { Timestamp } from 'firebase/firestore';
import { ElementRef, HostListener, Inject, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: [`./game-card.component.css`]
})
export class GameCardComponent implements OnInit {
  @Input() juego!: Result;
  userID=this.LoginService.getId();
  usuario=this.LoginService.getUser();
  fecha: Timestamp = Timestamp.now();
  listas: { icon: string, nombre: string, value: number}[] = [
    { icon: "favorite", nombre: "Seguidos", value: 1 },
    { icon: "watch_later", nombre: "Pendientes", value: 3 },
    { icon: "heart_broken", nombre: "Abandonados", value: 2 },

  ]
  constructor(private LoginService:LoginService, private BbddService:BbddService, @Inject(Window)private window:Window,
  public dialog: MatDialog) { }

  ngOnInit() {
  }

  Valoracion: Valoracion = {
    background_image: 'https://example.com/image.png',
    name: '',
    released: '2022-01-01',
    metacritic: 0,
    userID: this.userID,
    gameID: 1,
    usuario: this.usuario,
    valoracion: 0,
    critica: '',
    listaID: 0,
    fechaValoracion: this.fecha,
  };

  async cambiarDeLista(lista: number){
    this.Valoracion.background_image = this.juego.background_image
    this.Valoracion.name = this.juego.name
    this.Valoracion.released = this.juego.released.toString()
    this.Valoracion.metacritic = this.juego.metacritic
    this.Valoracion.gameID = this.juego.id
    this.Valoracion.listaID = lista
    await this.BbddService.selectInsertUpdateCambioLista(this.Valoracion, lista);
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { juego : this.Valoracion.name, user : this.Valoracion.usuario}
    });
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

  getColorFont(): { color: string } {
    if (this.juego.metacritic == null) {
      return { color: 'white' };
    } else if (this.juego.metacritic >= 85) {
      return { color: 'white' };
    } else if (this.juego.metacritic <= 84) {
      return { color: 'black' };
    } else if(this.juego.metacritic <= 50){
      return { color: 'white' };
    }else{
      return { color: 'white' };;
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
