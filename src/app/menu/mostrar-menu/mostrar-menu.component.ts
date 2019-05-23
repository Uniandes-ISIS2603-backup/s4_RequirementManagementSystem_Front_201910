import { Component, OnInit } from '@angular/core';
import { Objetivo } from '../../objetivo/objetivo';
import {ObjetivoService} from '../../objetivo/objetivo.service';
import { Proyecto } from '../../proyecto/proyecto';
import {ProyectoService} from '../../proyecto/proyecto.service';
import { Router } from '@angular/router';
import { RequisitoService } from '../../requisito/requisito.service';
import { CasodeusoService } from '../../casodeuso/casodeuso.service';


@Component({
  selector: 'app-mostrar-menu',
  templateUrl: './mostrar-menu.component.html',
  styleUrls: ['./mostrar-menu.component.css']
})
export class MostrarMenuComponent implements OnInit {

  constructor(private proyectoService:ProyectoService, private objetivoService: ObjetivoService, 
    private requisitoService: RequisitoService, private router: Router, private casosDeUsoService: CasodeusoService) { }

  objetivos: any[];

  requisitos: any[];

  proyectos:Proyecto[];

  casosDeUso: any[];

    /*mostrarObjetivos(){
        this.objetivoService.getObjetivos().subscribe(objs => this.objetivos = objs);
    }*/

    mostrarProyectos(){
      this.proyectoService.getProyectos().subscribe(projs => {this.proyectos = projs; console.log(projs);
      });
      
    }
 
    mostrarObjetivos(proyectoId){
      this.objetivoService.getObjetivos(proyectoId).subscribe(objs => {this.objetivos = objs;
      console.log(objs);})
      console.log(this.objetivos[0])
        }

      mostrarRequisitos(proyectoId, objetivoId){
        this.requisitoService.getRequisitos(proyectoId, objetivoId).subscribe(reqs => {this.requisitos = reqs;
          console.log(reqs);})
          console.log(this.objetivos[0])
      }

      mostrarCasosDeUso(proyectoId, objetivoId, requisitoId){
        this.casosDeUsoService.getCasosdeuso(proyectoId, objetivoId, requisitoId).subscribe(casos => {this.casosDeUso = casos;
          console.log(casos);})
          console.log(this.objetivos[0])
      }
  
     
      

  

  ngOnInit() {
    /*this.mostrarObjetivos();*/
    
    this.mostrarProyectos();
    /*this.mostrarObjetivos(this.proyectoId);*/
  }

}
