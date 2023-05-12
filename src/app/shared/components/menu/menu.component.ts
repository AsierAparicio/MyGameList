import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    mat-toolbar{
      height: 10%;
       background-color:#8794c0;
    }
    mat-form-field{
      margin-top: 1.5%;
      margin-right: 2vw;

    }

  `]
})
export class MenuComponent {

}
