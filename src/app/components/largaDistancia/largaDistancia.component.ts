import  {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector:'app-largaDistancia',
    templateUrl:'./largaDistancia.component.html',
    styleUrls:   ['./largaDistancia.component.css']
})

export class LargaDistanciaComponent{
    constructor(private _route:Router){}

    
    ngOnInit() {}

    navegarAnterior():void{
    this._route.navigate(['Trenes']);
    }
}

