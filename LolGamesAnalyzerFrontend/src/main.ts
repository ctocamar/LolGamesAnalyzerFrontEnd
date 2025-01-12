import { bootstrapApplication } from '@angular/platform-browser';
import { DashboardComponent } from './app/components/dashboard/dashboard.component';
import { importProvidersFrom } from '@angular/core';
import {} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
