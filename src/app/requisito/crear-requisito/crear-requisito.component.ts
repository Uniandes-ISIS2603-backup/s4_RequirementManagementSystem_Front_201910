import { Component, OnInit } from '@angular/core';
import { Requisito } from '../requisito';

@Component({
  selector: 'app-crear-requisito',
  templateUrl: './crear-requisito.component.html',
  styleUrls: ['./crear-requisito.component.css']
})
export class CrearRequisitoComponent implements OnInit {

  objeto: any = {};

  req: Requisito;
  constructor() 
  {
    
  }

  ngOnInit() {
  }

  crearObjeto()
  {
    
    this.req = this.objeto;
    console.log(this.req);
    
  }

}
