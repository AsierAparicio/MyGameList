import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './core/pages/game-list/game-list.component';
import { GameDetailComponent } from './core/pages/game-detail/game-detail.component';
import { HomeComponent } from './core/pages/home/home.component';
import { LoginComponent } from './core/pages/login/login.component';
import { RegistroComponent } from './core/pages/registro/registro.component';
import { GameListPersonalComponent } from './core/pages/game-list-personal/game-list-personal.component';
import { GameListGuardadosComponent } from './core/pages/game-list-guardados/game-list-guardados.component';
import { GameListSeguidosComponent } from './core/pages/game-list-seguidos/game-list-seguidos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path: 'detalles',
    component: GameDetailComponent,
  },
  {
    path: 'home',
    component: GameListComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'detail/:id',
    component: GameDetailComponent,
  },
  {
    path: 'abandonados/:userId',
    component: GameListPersonalComponent,
  },
  {
    path: 'seguidos/:userId',
    component: GameListSeguidosComponent,
  },
  {
    path: 'guardados/:userId',
    component: GameListGuardadosComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
