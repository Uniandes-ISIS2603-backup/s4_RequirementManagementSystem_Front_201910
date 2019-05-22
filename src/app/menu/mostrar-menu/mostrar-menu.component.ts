import { Component, OnInit } from '@angular/core';
import { Objetivo } from '../../objetivo/objetivo';
import {ObjetivoService} from '../../objetivo/objetivo.service';
import { Proyecto } from '../../proyecto/proyecto';
import {ProyectoService} from '../../proyecto/proyecto.service';


@Component({
  selector: 'app-mostrar-menu',
  templateUrl: './mostrar-menu.component.html',
  styleUrls: ['./mostrar-menu.component.css']
})
export class MostrarMenuComponent implements OnInit {

  constructor(private proyectoService:ProyectoService, private objetivoService: ObjetivoService) { }

  objetivos: Objetivo[];

  proyectos:Proyecto[];

  proyectoId: Number;

    /*mostrarObjetivos(){
        this.objetivoService.getObjetivos().subscribe(objs => this.objetivos = objs);
    }*/

    mostrarProyectos(){
      this.proyectoService.getProyectos().subscribe(projs => this.proyectos = projs);
      
    }

    mostrarObjetivos(proyectoId){
      this.proyectoService.getObjetivos(this.proyectoId).subscribe(objs=>this.objetivos = objs);
    }

  

  ngOnInit() {
    /*this.mostrarObjetivos();*/
    this.mostrarProyectos();
    this.mostrarObjetivos(this.proyectoId);
  }

}
