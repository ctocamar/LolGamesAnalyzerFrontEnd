import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://api.tokavic.es/auth/generateJWT'; // Reemplaza con la URL correcta

  constructor(private http: HttpClient) {}

  // Método para obtener el token desde el backend
  generateToken(): Observable<{ token: string }> {
    console.log("hola");
    const requestBody = {
      api_key: "API_1234",
      permisos: {
        menu_servidores: 2,
        menu_stb: 2,
        menu_tickets: 2,
        menu_menus: 2,
        menu_utils: 2,
        menu_expendedoras: 2,
        hospital_distribucion: 2,
      },
      user: "AngularWebApp",
    };

    // Realizar la solicitud POST con el cuerpo definido
    return this.http.post<{ token: string }>(this.apiUrl, requestBody);
  }

  // Método para autenticar y obtener el token
  authenticateAndGetToken(): void {
    this.generateToken().subscribe(
      (response) => {
        const token = response.token; // Extraemos el token del response
        console.log('Token obtenido:', token);
        // Guardamos el token en localStorage
        localStorage.setItem('authToken', token);
      },
      (error) => {
        console.error('Error al obtener el token', error);
      }
    );
  }

  // Método para obtener el token desde el localStorage
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Método para eliminar el token (por ejemplo, al hacer logout)
  removeToken(): void {
    localStorage.removeItem('authToken');
  }
}
