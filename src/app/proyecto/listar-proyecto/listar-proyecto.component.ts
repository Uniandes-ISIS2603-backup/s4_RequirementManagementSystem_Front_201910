import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../proyecto.service';
import { Router } from '@angular/router';
import {ProyectoDetail} from '../proyecto-detail';

/**
* The component for the list of projects in the Requirement Management System
*/
@Component({
  selector: 'app-listar-proyecto',
  templateUrl: './listar-proyecto.component.html',
  styleUrls: ['./listar-proyecto.component.css']
})
export class ListarProyectoComponent implements OnInit {

  constructor(private proyectoService: ProyectoService,private router: Router) { }

  /**
  * The list of projects that belong to the Requirement Management System.
  */
 proyectos: ProyectoDetail[];
  
 /**
  * Id of the selected project
  */
 proyecto_id:number;

 /**
  * proyectoDetail, which shows the selected project to be shown. 
  */
 selectedProyecto: ProyectoDetail;

 /**
   * Asks the service to update the list of projects.
   */
 getProyectos(): void {
   this.proyectoService.getProyectos().subscribe(proyectos => this.proyectos = proyectos);
 }

 /**
  * Method that executes when the projects with the proyecto_id is selected
  * @param proyecto_id id of the selected project 
  */
 onSelected(proyecto_id: number): void {
       this.proyectoService.getProyectoDetail(proyecto_id).subscribe(o => {
         this.proyecto_id = proyecto_id;
         this.selectedProyecto = new ProyectoDetail();
         this.selectedProyecto = o;
     console.log("EN  ls lista", this.selectedProyecto) ;
    console.log(o) ;
   });
 }

 /**
   * This will initialize the component by retrieving the list of cases from the service
   * This method will be called when the component is created
   */
 ngOnInit() {
   this.getProyectos();
   
 }

}
