import { Component } from '@angular/core';
import {RouterModule  ,Routes } from '@angular/router';
import{InicioComponent} from './components/home/home.component';
import {UbicacionComponent} from './components/ubicacion/ubicacion.component';
import{TrenesComponent} from './components/trenes/trenes.component';
import {AreaMetropolitana} from './components/areaMetropolitana/areaMetropolitana.component';
import {LargaDistanciaComponent} from './components/largaDistancia/largaDistancia.component';

const APP_ROUTES: Routes = [
{path: 'Inicio', component: InicioComponent},
{path: 'Ubicacion', component: UbicacionComponent},
{path:'Trenes', component:TrenesComponent},
{path: 'AreaMetropolitana', component: AreaMetropolitana},
{path:'LargaDistancia', component:LargaDistanciaComponent},
//{path: '**', pathMatch:'full', redirectTo:'Inicio'}
];
//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES); 

  export class AppRoutingModule { }
  