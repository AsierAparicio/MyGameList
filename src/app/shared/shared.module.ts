import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './components/game-card/game-card.component';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { GameCardValoracionComponent } from './components/game-card-valoracion/game-card-valoracion.component';


@NgModule({

  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [GameCardComponent, MenuComponent,StarRatingComponent, GameCardValoracionComponent],
  exports: [GameCardComponent, MenuComponent,StarRatingComponent,GameCardValoracionComponent]
})
export class SharedModule { }
