import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from 'src/app/interfaces/Videojuego.interfaces';
import { HttpClient } from '@angular/common/http';
import { GameService } from '../../services/game.service';
import { switchMap } from "rxjs";
import { VideojuegoIndividual } from 'src/app/interfaces/Videojuego_Individual.interface';
import { Meta } from '@angular/platform-browser';



@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  game!: VideojuegoIndividual;
  rating = 0;
  constructor(
    private gameService:GameService, private activateRoute: ActivatedRoute
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


}
