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
import { BbddService } from './services/bbdd.service';
import { GameListPersonalComponent } from './pages/game-list-personal/game-list-personal.component';
import { GameListSeguidosComponent } from './pages/game-list-seguidos/game-list-seguidos.component';
import { GameListGuardadosComponent } from './pages/game-list-guardados/game-list-guardados.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NgChartsModule } from 'ng2-charts';
import {ClipboardModule} from '@angular/cdk/clipboard';




@NgModule({
  providers: [BbddService],
  imports: [
    SharedModule,
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgChartsModule,
    ClipboardModule
  ],
  declarations: [LoginComponent,HomeComponent,GameListComponent,GameDetailComponent, RegistroComponent, GameListPersonalComponent, GameListSeguidosComponent, GameListGuardadosComponent, ProfileComponent],
  exports:[LoginComponent,HomeComponent,GameListComponent,GameDetailComponent, RegistroComponent, ProfileComponent]
})
export class CoreModule { }
