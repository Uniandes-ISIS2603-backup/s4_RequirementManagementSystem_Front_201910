import { Component, OnInit } from '@angular/core';
import { Requisito } from '../requisito';
@Component({
  selector: 'app-modificar-requisito',
  templateUrl: './modificar-requisito.component.html',
  styleUrls: ['./modificar-requisito.component.css']
})
export class ModificarRequisitoComponent implements OnInit {

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


