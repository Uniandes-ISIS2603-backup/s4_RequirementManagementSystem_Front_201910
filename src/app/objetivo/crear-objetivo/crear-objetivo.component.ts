import { Component, OnInit } from '@angular/core';
import { Objetivo } from '../objetivo';

@Component({
  selector: 'app-crear-objetivo',
  templateUrl: './crear-objetivo.component.html',
  styleUrls: ['./crear-objetivo.component.css']
})
export class CrearObjetivoComponent implements OnInit {

  objeto: any = {};

  objetivo: Objetivo;
  constructor() 
  {
    
  }

  ngOnInit() {
  }

  crearObjeto()
  {
    //console.log(this.objeto);
    this.objetivo = this.objeto;
    console.log(this.objetivo);
    
  }
}
