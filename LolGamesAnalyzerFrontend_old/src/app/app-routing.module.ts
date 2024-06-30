import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full'},
    { path: 'inicio', component: InicioComponent},
    { path: 'test', component: TestComponent}

  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }