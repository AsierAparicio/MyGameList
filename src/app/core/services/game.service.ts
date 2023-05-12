import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Videojuego } from '../../interfaces/Videojuego.interfaces';
import { formatDate } from '@angular/common';
import { VideojuegoIndividual } from 'src/app/interfaces/Videojuego_Individual.interface';


@Injectable({
  providedIn: 'root'
})
export class   GameService {
  private apiKey = '2aedb5eb15024be8b85aaa66f4c320d2';
  private ALFABETO_ESPANOL = 'abcdefghijklmnñopqrstuvwxyz';

  constructor(private http: HttpClient) { }

  getGames(num: number): Observable<Videojuego> {
    return this.http.get<Videojuego>(`https://api.rawg.io/api/games?key=${this.apiKey}&page=${num}`)
  }

  getLastGames(num: number): Observable<Videojuego> {
    const fechaAnterior = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
    return this.http.get<Videojuego>(`https://api.rawg.io/api/games?key=${this.apiKey}&page=${num}&dates=1870-01-01,${fechaAnterior}&ordering=-released`)
  }

  getBestGames(num: number): Observable<Videojuego> {
    return this.http.get<Videojuego>(`https://api.rawg.io/api/games?key=${this.apiKey}&page=${num}&ordering=-metacritic`)
  }

  //Filtros Fecha-------------------------------------------------------------------------------------------------------
  getLastGamesGenero(num: number, genero: string): Observable<Videojuego> {
    const fechaAnterior = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
    return this.http.get<Videojuego>(`https://api.rawg.io/api/games?genres=${genero}&key=${this.apiKey}&page=${num}&dates=1870-01-01,${fechaAnterior}&ordering=-released`)
  }

  getLastGamesPlataforma(num: number, plataforma: string): Observable<Videojuego> {
    const fechaAnterior = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
    return this.http.get<Videojuego>(`https://api.rawg.io/api/games?platforms=${plataforma}&key=${this.apiKey}&page=${num}&dates=1870-01-01,${fechaAnterior}&ordering=-released`)
  }

  getLastGamesPlataformaGenero(num: number, genero: string, plataforma: string): Observable<Videojuego> {
    const fechaAnterior = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');
    return this.http.get<Videojuego>(`https://api.rawg.io/api/games?platforms=${plataforma}&genres=${genero}&key=${this.apiKey}&page=${num}&dates=1870-01-01,${fechaAnterior}&ordering=-released`)
  }

  //Filtros Rating-------------------------------------------------------------------------------------------------------
  getBestGamesGenero(num: number, genero: string): Observable<Videojuego> {
    return this.http.get<Videojuego>(`https://api.rawg.io/api/games?genres=${genero}&key=${this.apiKey}&page=${num}&ordering=-metacritic`)
  }

  getBestGamesPlataforma(num: number, plataforma: string): Observable<Videojuego> {
    return this.http.get<Videojuego>(`https://api.rawg.io/api/games?platforms=${plataforma}&key=${this.apiKey}&page=${num}&ordering=-metacritic`)
  }

  getBestGamesPlataformaGenero(num: number, genero: string, plataforma: string): Observable<Videojuego> {
    return this.http.get<Videojuego>(`https://api.rawg.io/api/games?platforms=${plataforma}&genres=${genero}&key=${this.apiKey}&page=${num}&ordering=-metacritic`)
  }

  //Filtros Base-------------------------------------------------------------------------------------------------------
  getFiltroGenero(num: number, genero: string): Observable<Videojuego> {
    return this.http.get<Videojuego>(`https://api.rawg.io/api/games?genres=${genero}&key=${this.apiKey}&page=${num}`)
  }

  getFiltroPlataforma(num: number, plataforma: string): Observable<Videojuego> {
    return this.http.get<Videojuego>(`https://api.rawg.io/api/games?platforms=${plataforma}&key=${this.apiKey}&page=${num}`)
  }

  getFiltroPlataformaGenero(num: number, genero: string, plataforma: string): Observable<Videojuego> {
    return this.http.get<Videojuego>(`https://api.rawg.io/api/games?platforms=${plataforma}&genres=${genero}&key=${this.apiKey}&page=${num}`)
  }
  
  
  
  getGamesById(id: number): Observable<VideojuegoIndividual> {
    return this.http.get<VideojuegoIndividual>(`https://api.rawg.io/api/games/${id}?key=${this.apiKey}`)
  }
}
