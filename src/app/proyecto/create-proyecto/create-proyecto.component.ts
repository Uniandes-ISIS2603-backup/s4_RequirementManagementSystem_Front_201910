import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ProyectoService} from '../proyecto.service';
import { ToastrService } from 'ngx-toastr';
import {ProyectoDetail} from '../proyecto-detail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-proyecto',
  templateUrl: './create-proyecto.component.html',
  styleUrls: ['./create-proyecto.component.css']
})
export class CreateProyectoComponent implements OnInit {

  /**
    * Constructor for the component
    * @param proyectoService The project's service provider
    * @param toastrService The toastr to show messages to the user 
    * @param router The router of the component
    */
   constructor(private proyectoService: ProyectoService,
    private toastrService: ToastrService,
    router: Router) { }

  /**
 * The new project to be created.
 * It is a detail because of the comment on the project.
 */
  proyectoDetail: ProyectoDetail;

  /**
    * The output which tells the parent component
    * that the user no longer wants to create a project.
    */
  @Output() cancel = new EventEmitter();

  /**
   * The output which tells the parent component
   * that the user created a new project.
   */
  @Output() create = new EventEmitter();

  /**
 * Creates a new project. 
 */
  createProyecto(): ProyectoDetail {
    console.log(this.proyectoDetail);
   this.proyectoService.createProyecto(this.proyectoDetail)
       .subscribe((proyectoDetail) => {
           this.proyectoDetail = proyectoDetail;
           this.create.emit();
           this.toastrService.success("El proyecto fue creado", "Creacion de proyecto");
       }, err => {
           this.toastrService.error(err, "Error");
       });
   return this.proyectoDetail;
}

/**
* Informs the parent component that the user no longer wants to create a change.
*/
cancelCreation(): void {
   this.cancel.emit();
}

/**
* This function will initialize the component
*/
  ngOnInit() {
    this.proyectoDetail = new ProyectoDetail();
  }


}
