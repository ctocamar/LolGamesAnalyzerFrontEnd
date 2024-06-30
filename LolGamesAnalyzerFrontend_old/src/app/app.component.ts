import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { response } from 'express';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'LolGamesAnalyzerFrontend';
  constructor( private router: Router){}

  public ngOnInit(): void {

  }
}
