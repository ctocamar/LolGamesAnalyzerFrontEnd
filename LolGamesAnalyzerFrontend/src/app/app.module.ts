import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HistogramComponent } from './components/histogram/histogram.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent, HeaderComponent } from '@coreui/angular';
import { AppRoutingModule } from './app-routing.module';

@NgModule({ declarations: [],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        HeaderComponent,
        FooterComponent,
        DashboardComponent,
        HistogramComponent,
        AppRoutingModule], providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule {}
