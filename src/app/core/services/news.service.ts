import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticias } from '../../interfaces/Noticias.interfaces';

@Injectable({
  providedIn: 'root'
})
export class   NewsService {
  private apiKey = '49e39818bbb54a5cb8a66baa227fb115';

  constructor(private http: HttpClient) { }

  getNews(): Observable<Noticias> {
    const fechaActual = new Date();
    const anyo = fechaActual.getFullYear();
    const mes = ('0' + (fechaActual.getMonth() + 1)).slice(-2); // Agregamos un cero al mes si es necesario, y tomamos los últimos 2 dígitos
    const dia = ('0' + (fechaActual.getDay()-1)).slice(-2); // Agregamos un cero al día si es necesario, y tomamos los últimos 2 dígitos
    const fechaActualFormateada = `${anyo}-${mes}-${dia}`;

    return this.http.get<Noticias>(`https://newsapi.org/v2/everything?q=videojuegos&from=2023-05-01&apiKey=${this.apiKey}&pageSize=4`)
  }
}
