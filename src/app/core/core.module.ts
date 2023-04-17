import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { GameListComponent } from './pages/game-list/game-list.component';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent,HomeComponent,GameListComponent,GameDetailComponent],
  exports:[LoginComponent,HomeComponent,GameListComponent,GameDetailComponent]
})
export class CoreModule { }
