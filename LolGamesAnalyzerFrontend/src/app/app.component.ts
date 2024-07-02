import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { ParticipantFrameDTO } from './DTO/ParticipantFrameDTO';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    CommonModule,
    HeaderComponent,
    FooterComponent
  ],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PABLOPEDROLO THE GOAT';
  isLoading = true;
  gameData : Array<ParticipantFrameDTO> = [];
  errorMessage = '';
  constructor(private service: ApiService){ }

  ngOnInit() {
    this.service.getData().subscribe(
      res => {
        console.log('Received data:', res);
        this.gameData = res;
        console.log('GameData:', this.gameData);
        this.isLoading = false;
      });
    }
}
