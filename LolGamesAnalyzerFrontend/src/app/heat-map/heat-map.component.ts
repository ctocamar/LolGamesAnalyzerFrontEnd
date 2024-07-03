

import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { ParticipantFrameDTO } from '../DTO/ParticipantFrameDTO';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-heat-map',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent
  ],
  providers: [ApiService],
  templateUrl: './heat-map.component.html',
  styleUrl: './heat-map.component.css'
})
export class HeatMapComponent implements OnInit {
  title = 'PABLOPEDROLO THE GOAT';
  isLoading = true;
  gameData : Array<ParticipantFrameDTO> = [];
  errorMessage = '';
  constructor(private service: ApiService){ }

  ngOnInit() {
    this.service.getData().subscribe(
      res => {
        console.log('aaaaaaa');
        console.log('Received data:', res);
        this.gameData = res;
        console.log('GameData:', this.gameData);
        this.isLoading = false;
      });
    }
}
