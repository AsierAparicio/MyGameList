import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from './components/game-card/game-card.component';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { GameCardValoracionComponent } from './components/game-card-valoracion/game-card-valoracion.component';
import { GraficasComponent } from './components/graficas/graficas.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({

  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    NgChartsModule
  ],
  declarations: [GameCardComponent, MenuComponent,StarRatingComponent, GameCardValoracionComponent, GraficasComponent],
  exports: [GameCardComponent, MenuComponent,StarRatingComponent,GameCardValoracionComponent, GraficasComponent]
})
export class SharedModule { }
