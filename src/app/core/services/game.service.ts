import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Videojuego } from '../../interfaces/Videojuego.interfaces';
import { VideojuegoIndividual } from 'src/app/interfaces/VideojuegoIndividual.interfeces';
@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiKey = '2aedb5eb15024be8b85aaa66f4c320d2';

  constructor(private http: HttpClient) { }

  getGames(num: number): Observable<Videojuego> {
    return this.http.get<Videojuego>(`https://api.rawg.io/api/games?key=${this.apiKey}&page=${num}`)
  }

  getLastGames(num: number): Observable<Videojuego> {
    return this.http.get<Videojuego>(`https://api.rawg.io/api/games?key=${this.apiKey}&page=${num}&ordering=-released`)
  }

  getBestGames(num: number): Observable<Videojuego> {
    return this.http.get<Videojuego>(`https://api.rawg.io/api/games?key=${this.apiKey}&page=${num}&ordering=-rating`)
  }

  getGamesById(id: number): Observable<VideojuegoIndividual> {
    return this.http.get<VideojuegoIndividual>(`https://api.rawg.io/api/games/${id}?key=${this.apiKey}`)
  }
}
