import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'; // Las rutas van acá.

//rutas
// import {APP_ROUTING} from './app.route';
//servicios
import {TrenAreaMetropolitanaService} from './servicios/trenAreaMetropolitana.service';


//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/home/home.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { FooterComponent } from './components/footer/footer.component';
import {TrenesComponent} from './components/trenes/trenes.component';
import { FormsModule } from '@angular/forms';
import {AreaMetropolitana} from './components/areaMetropolitana/areaMetropolitana.component';
import{LargaDistanciaComponent} from './components/largaDistancia/largaDistancia.component';


@NgModule({
  
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    UbicacionComponent,
    TrenesComponent,
    FooterComponent,
    AreaMetropolitana,
    LargaDistanciaComponent
    
  ],
  imports: [    
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    // APP_ROUTING
  ],
  providers: [TrenAreaMetropolitanaService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
