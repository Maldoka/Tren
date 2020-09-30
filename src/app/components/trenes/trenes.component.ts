import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trenes',
  templateUrl: './trenes.component.html'

})
export class TrenesComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit(): void {
  } 

 navegarTrenMetropolitana():void{
   this._route.navigate(['AreaMetropolitana']);
 }

 navegarTrenLargaDistancia():void{
   this._route.navigate(['LargaDistancia']);
 }
}
