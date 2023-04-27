import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/interfaces/Videojuego.interfaces';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  game!: any;

  constructor(
    private router: Router,
  ) {
    if(this.router.getCurrentNavigation()!.extras.state){
      this.game = this.router.getCurrentNavigation()!.extras.state;
    } else{
      //llamar api id y cargar this.game usar pipe().first().subscribe para no mantener subscripcion activa!
    }
  }
  ngOnInit(): void {
  }

}
