import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent, HeaderComponent } from '@coreui/angular';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[
    HttpClientModule,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    DashboardComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mi Aplicación'; // Puedes personalizar esto si lo deseas
}