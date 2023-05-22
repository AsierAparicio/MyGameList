import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Result } from 'src/app/interfaces/Videojuego.interfaces';
import { NewsService } from '../../services/news.service';
import { Article } from '../../../interfaces/Noticias.interfaces';
import { LoginService } from '../../services/login.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

interface Option {
  value: string;
  label: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    { provide: Window, useValue: window }
  ]
})
export class HomeComponent implements OnInit {

  @ViewChild('listasMenu', {read:ElementRef})
  private listasMenu!:ElementRef<HTMLDivElement>

  private initialBreakpoint?:number;
  listasMenuClass = ''
  cardsClass = ''

  constructor(private newsService: NewsService,
    private gameService: GameService,
    private loginService: LoginService, @Inject(Window)private window:Window,
    public dialog: MatDialog) { }

  userID = this.loginService.getId()
  juegos: Result[] = []
  noticias: Article[] = []
  listas: { icon: string, nombre: string }[] = [
    { icon: "favorite", nombre: "Seguidos" },
    { icon: "watch_later", nombre: "Pendientes" },
    { icon: "heart_broken", nombre: "Abandonados" },

  ]
  //update
  num: number = 1
  ngOnInit(): void {
    this.cargar()

    
  }

  cargar() {
    this.gameService.getGames(this.num).subscribe(data => {
      this.juegos = data.results
    });
    this.newsService.getNews().subscribe(data => {
      this.noticias = data.articles
    });
  }

  cargarRelevancia() {
    this.gameService.getBestGames(this.num).subscribe(data => {
      this.juegos = data.results
    });
  }

  cargarUltimos() {
    this.gameService.getLastGames(this.num).subscribe(data => {
      this.juegos = data.results
    });
  }

  siguiente() {
    this.num++
    this.cargar()
  }

  anterior() {
    if (this.num === 1) {
      return;
    }
    this.num--
    this.cargar()
  }



  selectedOption: string | undefined;

  options: Option[] = [
    { value: 'option1', label: 'Relevancia' },
    { value: 'option2', label: 'Nota' },
    { value: 'option3', label: 'Fecha de estreno' }
  ];

  onOptionSelected() {
    if (!this.selectedOption) {
      return;
    }
    switch (this.selectedOption) {
      case 'option1':
        this.handleOption1();
        break;
      case 'option2':
        this.handleOption2();
        break;
      case 'option3':
        this.handleOption3();
        break;
      default:
        break;
    }
  }

  handleOption1() {
    this.cargar();
  }

  handleOption2() {
    this.cargarRelevancia();
  }

  handleOption3() {
    this.cargarUltimos();
  }

  @HostListener('window:scroll', ['$event'])
  protected onScroll(){
    const {offsetTop} = this.listasMenu.nativeElement;


    if(!this.initialBreakpoint && offsetTop < this.window.scrollY){
      this.listasMenuClass = 'fixed';
      this.cardsClass = 'listasFixed';
      this.initialBreakpoint = offsetTop;
    }

    if(this.initialBreakpoint && this.window.scrollY < this.initialBreakpoint){
      this.listasMenuClass = 'noFixed';
      this.cardsClass = 'listasNoFixed';
      this.initialBreakpoint = undefined
    }
  }
}

