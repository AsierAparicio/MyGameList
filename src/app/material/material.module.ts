import { NgModule } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [],
  exports: [
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule
  ]
})
export class MaterialModule { }