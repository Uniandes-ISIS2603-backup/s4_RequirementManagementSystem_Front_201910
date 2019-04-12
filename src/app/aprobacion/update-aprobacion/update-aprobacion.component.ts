import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AprobacionService } from '../aprobacion.service';
import { ToastrService } from 'ngx-toastr';
import { AprobacionDetail } from '../aprobacion-detail';

@Component({
  selector: 'app-update-aprobacion',
  templateUrl: './update-aprobacion.component.html',
  styleUrls: ['./update-aprobacion.component.css']
})
/**
 * Component that updates a specific approbation
 */
export class UpdateAprobacionComponent implements OnInit {

  /**
    * The component's constructor
    * @param aprobacionService The approbation´s service
    * @param toastrService The toastr to show messages to the user 
    */
   constructor(
    private aprobacionService: AprobacionService,
    private toastrService: ToastrService
) {}

/**
* The output which tells the parent component
* that the user no longer wants to create an approbation
*/
@Output() cancel = new EventEmitter();

/**
* The output which tells the parent component
* that the user updated a new approbation
*/
@Output() update = new EventEmitter();

/**
* The approbation to edit
*/
aprobacionDetail: AprobacionDetail;

 /**
  * Current time in which the creation of the approbation took place.
  */
 fecha: Date;


/**
* Retrieves the information of the approbation
*/
getAprobacion(id: number): void {
    this.aprobacionService.getAprobacionDetail(id)
        .subscribe(aprobacion => {
            this.aprobacionDetail = aprobacion;
        });
}

/**
* Updates the approbation's information
*/
editAprobacion(): void {
    this.aprobacionService.updateAprobacion(this.aprobacionDetail)
        .subscribe(() => {
            this.update.emit();
            this.toastrService.success("The approbation's information was updated", "Approbation edition");
        });
        console.log(this.aprobacionDetail);
        this.fecha = new Date();
        this.fecha.toLocaleString();
        this.aprobacionDetail.fechaYHora = this.fecha.toLocaleString();
}

/**
* Informs the parent component that the user no longer wants to update the approbation.
*/
cancelEdition(): void {
    this.cancel.emit();
}

/**
* The function which initializes the component
*/
ngOnInit() {
    this.aprobacionDetail = new AprobacionDetail();
}

/**
* The function which is called every time the user chooses to edit a different approbation
*/
ngOnChanges() {
    this.ngOnInit();

}
}