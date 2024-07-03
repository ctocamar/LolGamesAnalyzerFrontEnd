import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [

    provideRouter([
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      { path: 'inicio', loadComponent: () => import('./app/heat-map/heat-map.component').then(m => m.HeatMapComponent) },
      { path: 'faq', loadComponent: () => import('./app/faq/faq.component').then(m => m.FaqComponent) },
      { path: 'politica-privacidad', loadComponent: () => import('./app/politica-privacidad/politica-privacidad.component').then(m => m.PoliticaPrivacidadComponent) },
      { path: 'terminos-servicio', loadComponent: () => import('./app/terminos-servicio/terminos-servicio.component').then(m => m.TerminosServicioComponent) },
      { path: '**', redirectTo: 'inicio' }
    ])
  ]
}).catch(err => console.error(err));
