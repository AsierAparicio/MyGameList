import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/Videojuego.interfaces';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styles: [`
  mat-card {
    margin-top: 20px;
    max-width: 100%;
  }
  .card-container {
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
box-sizing: border-box;
padding: 20px;
border-radius: 10px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
overflow: hidden;
}

.mat-card-header {
margin-bottom: 20px;
}

.mat-card-title {
max-width: 100%;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}


  .card-container {
display: inline-block;
width: 320px; /* tamaño fijo de la tarjeta */
margin: 16px;
}

.image-container {
width: 100%;
height: 200px; /* altura fija de la imagen */
overflow: hidden;
}

.image-container img {
width: 100%;
height: 100%;
object-fit: cover; /* la imagen se ajusta sin deformarse */
}
`]
})
export class GameCardComponent implements OnInit {
  @Input() juego!: Result;
  constructor() { }

  ngOnInit() {
  }

}
