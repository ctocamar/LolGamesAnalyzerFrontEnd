import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TimeLineDTO } from '../app/DTO/TimeLineDTO';



@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private apiUrl = 'http://localhost:5143/api/summoner/Tokavic/EUW';

  constructor(private http: HttpClient) { }

  getData(): Observable<TimeLineDTO> {
    return this.http.get<TimeLineDTO>(this.apiUrl);
  }
}
