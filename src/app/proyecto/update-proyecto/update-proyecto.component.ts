import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProyectoService } from '../proyecto.service';
import { ToastrService } from 'ngx-toastr';
import { ProyectoDetail } from '../proyecto-detail';
@Component({
  selector: 'app-update-proyecto',
  templateUrl: './update-proyecto.component.html',
  styleUrls: ['./update-proyecto.component.css']
})
export class UpdateProyectoComponent implements OnInit {

  /**
  * The component's constructor
  * @param ProyectoService The project's service
  * @param toastrService The toastr to show messages to the user 
  */
 constructor(private proyectoService: ProyectoService,
  private toastrService: ToastrService) { }


/**
* The output which tells the parent component
* that the user no longer wants to create a project
*/
@Output() cancel = new EventEmitter();

/**
* The output which tells the parent component
* that the user updated a new project
*/
@Output() update = new EventEmitter();

/**
* The proyecto to edit
*/
proyectoDetail: ProyectoDetail;

/**
* Retrieves the information of the project
*/
getProyecto(id: number): void {
  this.proyectoService.getProyectoDetail(id)
      .subscribe(proyecto => {
          this.proyectoDetail = proyecto;
      });
}

/**
* Updates the project's information
*/
editProyecto(): void {
  this.proyectoService.updateProyecto(this.proyectoDetail)
      .subscribe(() => {
          this.update.emit();
          this.toastrService.success("The project information was updated", "Project edition");
      });
      console.log(this.proyectoDetail);
}

/**
* Informs the parent component that the user no longer wants to update the project.
*/
cancelEdition(): void {
  this.cancel.emit();
}

/**
* The function which initializes the component
*/
ngOnInit() {
  this.proyectoDetail= new ProyectoDetail();
}

/**
* The function which is called every time the user chooses to edit a different project
*/
ngOnChanges() {
  this.ngOnInit();
}

}
