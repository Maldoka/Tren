import {Component, OnInit} from '@angular/core';
import {TrenAreaMetropolitanaService} from '../../servicios/trenAreaMetropolitana.service';
import {Router} from '@angular/router';


@Component({
selector:'app-areaMetropolitana',
templateUrl: './areaMetropolitana.component.html',
})

export class AreaMetropolitana implements OnInit {
        trenMetrop:any[]=[];

        constructor(private _trenesService:TrenAreaMetropolitanaService , private _route: Router ) { }
      
        ngOnInit() {
            this.trenMetrop=this._trenesService.getTrenesMetrop();
            console.log(this.trenMetrop);
        }

        navegarTrenAnterior(): void{
            this._route.navigate(['Trenes']);
        }

    }