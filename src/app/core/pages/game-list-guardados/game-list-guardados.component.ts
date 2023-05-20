import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Result } from 'src/app/interfaces/Videojuego.interfaces';
import { BbddService } from '../../services/bbdd.service';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import Valoracion from 'src/app/interfaces/Valoracion.interfaces';

@Component({
  selector: 'app-game-list-guardados',
  templateUrl: './game-list-guardados.component.html',
  styleUrls: ['./game-list-guardados.component.scss']
})
export class GameListGuardadosComponent {
  constructor(private gameService: GameService,
    private bbddService: BbddService,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private location: Location) { }

  juegos: Valoracion[] = []
  currentUrl: string = "";
  userID?: string = "";
  valoraciones: Valoracion[] = [];
  fecha = '';
  nota = '';
  /*
  
  
  
  */


  num: number = 1;
  ngOnInit(): void {

    this.test()

    this.currentUrl = this.location.path();
    const parts = this.currentUrl.split("/");
    this.userID = parts.pop(); // obtiene el último elemento del array

    this.cargarPropios()
  }

  cargarPropios() {
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

  visualizar() {
    if (this.fecha === '' && this.nota === '') {
      const variable = (this.userID === undefined ? "0" : this.userID)

      console.log(variable);
      var test = this.bbddService.select(variable, 3);

      test.then((objeto) => {
        console.log(objeto)
        this.juegos = objeto;
        console.log(this.juegos)
      }).catch((error) => {
        console.log(error); // Manejo de errores
      });
    } else if (this.fecha === '' && this.nota != '') {
      const variable = (this.userID === undefined ? "0" : this.userID)

      console.log(variable);
      var test = this.bbddService.selectValoracion(variable, 3, parseInt(this.nota));

      test.then((objeto) => {
        console.log(objeto)
        this.juegos = objeto;
        console.log(this.juegos)
      }).catch((error) => {
        console.log(error); // Manejo de errores
      });
    } else if (this.fecha === 'desc' && this.nota === '') {
      const variable = (this.userID === undefined ? "0" : this.userID)

      console.log(variable);
      var test = this.bbddService.selectFechaDesc(variable, 3);

      test.then((objeto) => {
        console.log(objeto)
        this.juegos = objeto;
        console.log(this.juegos)
      }).catch((error) => {
        console.log(error); // Manejo de errores
      });
    } else if (this.fecha === 'asc' && this.nota === '') {
      const variable = (this.userID === undefined ? "0" : this.userID)

      console.log(variable);
      var test = this.bbddService.selectFechaAsc(variable, 3);

      test.then((objeto) => {
        console.log(objeto)
        this.juegos = objeto;
        console.log(this.juegos)
      }).catch((error) => {
        console.log(error); // Manejo de errores
      });
    } else if (this.fecha === 'asc' && this.nota != '') {
      const variable = (this.userID === undefined ? "0" : this.userID)

      console.log(variable);
      var test = this.bbddService.selectValoracionFechaAsc(variable, 3, parseInt(this.nota));

      test.then((objeto) => {
        console.log(objeto)
        this.juegos = objeto;
        console.log(this.juegos)
      }).catch((error) => {
        console.log(error); // Manejo de errores
      });
    } else if (this.fecha === 'desc' && this.nota != '') {
      const variable = (this.userID === undefined ? "0" : this.userID)

      console.log(variable);
      var test = this.bbddService.selectValoracionFechaDesc(variable, 3, parseInt(this.nota));

      test.then((objeto) => {
        console.log(objeto)
        this.juegos = objeto;
        console.log(this.juegos)
      }).catch((error) => {
        console.log(error); // Manejo de errores
      });
    }
  }

  test() {
    this.route.params.subscribe(params => {
      this.userID = params['userID'];
      console.log(this.userID); // muestra el valor de userID en la consola
    });
  }


  filtrar(){
    this.visualizar();
  }

}
