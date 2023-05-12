import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/Videojuego.interfaces';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: [`./game-card.component.css`]
})
export class GameCardComponent implements OnInit {
  @Input() juego!: Result;
  constructor() { }

  ngOnInit() {
  }

}
