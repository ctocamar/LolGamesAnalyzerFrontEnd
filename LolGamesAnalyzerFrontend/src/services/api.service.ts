import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParticipantFrameDTO } from '../app/DTO/ParticipantFrameDTO';



@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private apiUrl = 'http://localhost:5143/api/summoner/Tokavic/EUW';

  constructor(private http: HttpClient) { }

  getData(): Observable<Array<ParticipantFrameDTO>> {
    return this.http.get<Array<ParticipantFrameDTO>>(this.apiUrl);
  }
}
