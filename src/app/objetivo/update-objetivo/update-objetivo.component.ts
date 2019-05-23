import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Objetivo } from '../objetivo';
import { ObjetivoService } from '../objetivo.service';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-objetivo',
  templateUrl: './update-objetivo.component.html',
  styleUrls: ['./update-objetivo.component.css']
})
export class UpdateObjetivoComponent implements OnInit {

  /**
  * The component's constructor
  * @param ProyectoService The project's service
  * @param toastrService The toastr to show messages to the user 
  */
 constructor(private objetivoService: ObjetivoService,
  private toastrService: ToastrService, private route: ActivatedRoute) { }


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
* The objetivo to edit
*/
objetivoDetail: Objetivo;

/**
* Retrieves the information of the project
*/
getObjetivo(id: number, oId: number): void {
  this.objetivoService.getObjetivo(id, oId)
      .subscribe(objetivo => {
          this.objetivoDetail = objetivo;
      });
}

/**
* Updates the project's information
*/
editObjetivo(): void {
  const idPr = +this.route.snapshot.paramMap.get('proyectoId');
  this.objetivoService.updateObjetivo(idPr, this.objetivoDetail.id, this.objetivoDetail)
      .subscribe(() => {
          this.update.emit();
          this.toastrService.success("The objetivo information was updated", "Objetivo edition");
      });
      console.log(this.objetivoDetail);
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
  this.objetivoDetail= new Objetivo();
}

/**
* The function which is called every time the user chooses to edit a different project
*/
ngOnChanges() {
  this.ngOnInit();
}
}
