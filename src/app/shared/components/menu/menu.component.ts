import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    mat-toolbar{
      height: 10%;
    }
    mat-form-field{
      margin-top: 1.5%;
      margin-right: 2vw;

    }
  `]
})
export class MenuComponent implements OnInit{
  constructor( private loginService: LoginService){}
  user:string = '';
  log:boolean = false;

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
