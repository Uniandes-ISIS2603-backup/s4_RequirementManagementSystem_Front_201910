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

  objetivos: any[];

  proyectos:Proyecto[];

    /*mostrarObjetivos(){
        this.objetivoService.getObjetivos().subscribe(objs => this.objetivos = objs);
    }*/

    mostrarProyectos(){
      this.proyectoService.getProyectos().subscribe(projs => this.proyectos = projs);
      
    }

   
    
    mostrarObjetivos(proyectoId){
      this.objetivoService.getObjetivos(proyectoId).subscribe(objs => {this.objetivos = objs;
      console.log(objs);})
      console.log(this.objetivos[0])
        }
      

  

  ngOnInit() {
    /*this.mostrarObjetivos();*/
    this.mostrarProyectos();
    /*this.mostrarObjetivos(this.proyectoId);*/
  }

}
