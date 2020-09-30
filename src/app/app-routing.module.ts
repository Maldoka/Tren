import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/home/home.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { TrenesComponent } from './components/trenes/trenes.component';
import { AreaMetropolitana } from './components/areaMetropolitana/areaMetropolitana.component'; 
import { LargaDistanciaComponent } from './components/largaDistancia/largaDistancia.component'; 

const routes: Routes = [
  {path: 'Inicio', component: InicioComponent},
{path: 'Ubicacion', component: UbicacionComponent},
{path:'Trenes', component:TrenesComponent},
{path: 'AreaMetropolitana', component: AreaMetropolitana},
{path:'LargaDistancia', component:LargaDistanciaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
