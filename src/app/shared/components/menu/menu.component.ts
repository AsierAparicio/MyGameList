import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    mat-toolbar{
      height: 10%;
       background-color:#4c22a7;
    }
    mat-form-field{
      margin-top: 1.5%;
      margin-right: 2vw;

    }

    @media screen and (min-width:920px) {
      .menuu{
        display: none;
      }
    }
    
    img {
      width:8vw;
      height:4vw;
    }

    a.directorio {
      text-decoration: none;
      display: block;
      color: white;
      padding-right: 5vw;
    }

    a.directorio:hover{
      transition: all .2s linear;
      color: #BB86FC;
    }

  `]
})
export class MenuComponent implements OnInit{
  constructor( private loginService: LoginService){}
  user:string = '';
  log:boolean = false;
  userID = this.loginService.getId()

  listas: { icon: string, nombre: string }[] = [
    { icon: "favorite", nombre: "Seguidos" },
    { icon: "watch_later", nombre: "Pendientes" },
    { icon: "heart_broken", nombre: "Abandonados" },

  ]

  ngOnInit(): void {
    this.checkear()
  }

  logOut(){
    this.loginService.logOut();
    this.checkear()
  }

  checkear(){
    this.user = this.loginService.getUser();
    if (this.user === '') {
      this.log = false;
    } else {
      this.log = true;
    }
  }

}
