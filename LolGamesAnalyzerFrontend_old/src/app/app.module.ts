import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from'@angular/forms';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TestComponent,
    InicioComponent,
    AppComponent
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
  ]
})
export class AppModule { }