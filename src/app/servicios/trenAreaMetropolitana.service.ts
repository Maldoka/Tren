import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
    export class TrenAreaMetropolitanaService{
        
private trenesMetrop: any[]=
        [
            {
              Estacion: "Tren de la Costa",
              img: "assets/img/trendelaCosta.jpg"
            },
         {
              Estacion: "Tren Mitre",
              img: "assets/img/fotoMitre.jpg"
            },
         {
              Estacion: "Tren Roca",
              img: "assets/img/fotoRoca.jpg"
            },
         {
              Estacion: "Tren General San Martin",
              img: "assets/img/fotoSanMartin.jpg"
            },  
         {
              Estacion: "Tren Sarmiento",
              img: "assets/img/fotoSarmiento.jpg"
            }, 
        
        ];
        constructor(){

            console.log("servicio listo para usar!!");                    
    }

    getTrenesMetrop(){
        return this.trenesMetrop;
    }
}