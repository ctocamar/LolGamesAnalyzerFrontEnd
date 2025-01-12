import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent, HeaderComponent } from '@coreui/angular';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {} from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [
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
