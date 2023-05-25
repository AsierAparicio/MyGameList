import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

    @media (max-width:920px) and (min-width:0px) {
      .menuu2{
        display: none;
      }
    }
    
    img {
      width:8vw;
      height:4vw;
    }

    .directorio {
      font-size: 20px;
      display: block;
      color: white;
      margin-right: 5vw;
    }

    .directorio:hover{
      transition: all .2s linear;
      color: #BB86FC;
    }

  `]
})
export class MenuComponent implements OnInit{
  constructor( private loginService: LoginService, private router: Router){}
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

  seguidos(){
    this.router.navigate(['/seguidos/'+this.userID]);
  }

  guardados(){
    this.router.navigate(['/guardados/'+this.userID]);
  }
  abandonados(){
    this.router.navigate(['/abandonados/'+this.userID]);
  }

  home(){
    this.router.navigate(['/home']);
  }

}
