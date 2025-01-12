import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HistogramComponent } from './components/histogram/histogram.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderModule, FooterModule } from '@coreui/angular';  // Importar los módulos de Header y Footer
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [

  ],
  imports: [
    AppComponent,        // AppComponent
    DashboardComponent,  // Declara DashboardComponent
    HistogramComponent,  // Declara HistogramComponent
    BrowserModule,
    FormsModule,
    AppRoutingModule,    // Asegúrate de que AppRoutingModule esté en imports
    RouterModule,        // Asegúrate de importar RouterModule si usas rutas
    HeaderModule,        // Importa el módulo para Header
    FooterModule         // Importa el módulo para Footer
  ],
  exports: [
    // No es necesario exportar HeaderComponent, CoreUIModule ya lo maneja
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent]  // Asegúrate de que AppComponent sea el bootstrap
})
export class AppModule { }
