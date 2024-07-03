import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeatMapComponent } from './heat-map/heat-map.component';
import { HeaderComponent } from './header/header.component';


 const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full'},
    { path: 'inicio', component: HeatMapComponent},
    { path: 'test', component: HeaderComponent},
    { path: '**', redirectTo: 'inicio' }

  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }
