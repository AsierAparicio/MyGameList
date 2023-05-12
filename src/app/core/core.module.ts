import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { GameListComponent } from './pages/game-list/game-list.component';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './pages/registro/registro.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule 
  ],
  declarations: [LoginComponent,HomeComponent,GameListComponent,GameDetailComponent, RegistroComponent],
  exports:[LoginComponent,HomeComponent,GameListComponent,GameDetailComponent, RegistroComponent]
})
export class CoreModule { }
