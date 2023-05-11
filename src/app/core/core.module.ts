import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { GameListComponent } from './pages/game-list/game-list.component';
import { GameDetailComponent } from './pages/game-detail/game-detail.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    RouterLink
  ],
  declarations: [LoginComponent,HomeComponent,GameListComponent,GameDetailComponent],
  exports:[LoginComponent,HomeComponent,GameListComponent,GameDetailComponent]
})
export class CoreModule { }
