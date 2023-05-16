import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Result } from 'src/app/interfaces/Videojuego.interfaces';
import { BbddService } from '../../services/bbdd.service';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import Valoracion from 'src/app/interfaces/Valoracion.interfaces';

@Component({
  selector: 'app-game-list-personal',
  templateUrl: './game-list-personal.component.html',
  styleUrls: ['./game-list-personal.component.scss']
})
export class GameListPersonalComponent implements OnInit{
  constructor(private gameService: GameService,
     private bbddService: BbddService,
      private loginService:LoginService,
      private route: ActivatedRoute,
      private location: Location) { }

  juegos: Valoracion[] = []
  currentUrl: string ="";
  userID ?: string ="";
  valoraciones : Valoracion[] = [];
  /*
  
  
  
  */


  num:number=1;
  ngOnInit(): void {
    
    this.test()

    this.currentUrl = this.location.path();
    const parts = this.currentUrl.split("/");
    this.userID = parts.pop(); // obtiene el último elemento del array

    this.cargarPropios()
  }

  cargarPropios(){
    //cambiar este metodo y hacer la petición a firebase
    this.visualizar()
  }

  siguiente() {
    this.num++
    this.cargarPropios()
    this.scrollToTop()
  }

  anterior() {
    if (this.num === 1) {
      return;
    }
    this.num--
    this.cargarPropios()
    this.scrollToTop()
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  visualizar(){
    const variable = (this.userID === undefined ? "0" : this.userID )

    console.log(variable);
    var test = this.bbddService.select( variable, 1);
    
    test.then((objeto) => {
      console.log(objeto)
      this.juegos = objeto;
      console.log(this.juegos)
    }).catch((error) => {
      console.log(error); // Manejo de errores
    });
  }



  test(){
    this.route.params.subscribe(params => {
      this.userID = params['userID'];
      console.log(this.userID); // muestra el valor de userID en la consola
    });
  }
}
