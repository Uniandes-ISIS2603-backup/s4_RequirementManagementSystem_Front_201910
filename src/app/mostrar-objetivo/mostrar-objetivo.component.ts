import { Component, OnInit } from '@angular/core';
import { Objetivo } from './objetivo';
import { ObjetivoService } from '../objetivo.service';

@Component({
  selector: 'app-mostrar-objetivo',
  templateUrl: './mostrar-objetivo.component.html',
  styleUrls: ['./mostrar-objetivo.component.css']
})
export class MostrarObjetivoComponent implements OnInit {

  obj: Objetivo;

  constructor(private objService: ObjetivoService) { }

   ngOnInit() {
     this.obj = new Objetivo();
    //this.getObjetivo();
  }
  /*getObjetivo(): void {
    this.objService.getObjetivos().subscribe(obj => {
      this.obj = obj;
    })
  } */

}
