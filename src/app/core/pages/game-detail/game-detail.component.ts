import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from 'src/app/interfaces/Videojuego.interfaces';
import { HttpClient } from '@angular/common/http';
import { GameService } from '../../services/game.service';
import { switchMap } from "rxjs";
import { VideojuegoIndividual } from 'src/app/interfaces/Videojuego_Individual.interface';


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  game!: VideojuegoIndividual;

  constructor(
    private gameService:GameService, private activateRoute: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    this.activateRoute.params.
    pipe(
      switchMap(({id})=> this.gameService.getGamesById(id))).subscribe(game=>this.game=game)
  }

}
