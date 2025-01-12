import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PlayerDTO } from '../DTO/PlayerDTO';

// Definir los tipos para los elementos
interface ElementStat {
  gd: number;
  cs: number;
  csj: number;
  xp: number;
}

// Definir el tipo para la respuesta de la API
interface ApiResponse {
  element: ElementStat[];
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getData(player: string, minute: number): Observable<any> {
    console.log('Sacando datos para el player');
    const token = localStorage.getItem('authToken'); // Obtener el token del localStorage

    // Si el token existe, añadirlo a los headers
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    const url = `${this.baseUrl}/match/differences/${player}/${minute}`;
    return this.http.get<ApiResponse>(url, { headers });
  }

  getPlayers(): Observable<any> {
    const token = localStorage.getItem('authToken'); // Obtener el token del localStorage

    // Si el token existe, añadirlo a los headers
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    const url = `${this.baseUrl}/player/players/`;
    return this.http.get<PlayerDTO[]>(url, { headers });
  }
}
