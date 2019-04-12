import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CambioService } from '../cambio.service';
import { ToastrService } from 'ngx-toastr';
import { CambioDetail } from '../cambio-detail';

@Component({
  selector: 'app-cambio-update',
  templateUrl: './cambio-update.component.html',
  styleUrls: ['./cambio-update.component.css']
})
/**
 * Component that updates a specific change
 */
export class CambioUpdateComponent implements OnInit {

  /**
    * The component's constructor
    * @param cambioService The change´s service
    * @param toastrService The toastr to show messages to the user 
    */
   constructor(
    private cambioService: CambioService,
    private toastrService: ToastrService
) {}

/**
* The output which tells the parent component
* that the user no longer wants to create a change
*/
@Output() cancel = new EventEmitter();

/**
* The output which tells the parent component
* that the user updated a new change
*/
@Output() update = new EventEmitter();

/**
* The change to edit
*/
cambioDetail: CambioDetail;

  /**
  * Current time in which the creation of the change took place.
  */
 fecha: Date;


/**
* Retrieves the information of the change
*/
getCambio(id: number): void {
    this.cambioService.getCambioDetail(id)
        .subscribe(cambio => {
            this.cambioDetail = cambio;
        });
}

/**
* Updates the change's information
*/
editCambio(): void {
    this.cambioService.updateCambio(this.cambioDetail)
        .subscribe(() => {
            this.update.emit();
            this.toastrService.success("The change's information was updated", "Change edition");
        });
        console.log(this.cambioDetail);
}

/**
* Informs the parent component that the user no longer wants to update the change.
*/
cancelEdition(): void {
    this.cancel.emit();
}

/**
* The function which initializes the component
*/
ngOnInit() {
    this.cambioDetail = new CambioDetail();
}

/**
* The function which is called every time the user chooses to edit a different change
*/
ngOnChanges() {
    this.ngOnInit();
    this.cambioDetail = new CambioDetail();
    this.fecha = new Date();
    this.fecha.toLocaleString();
    this.cambioDetail.fechaYHora = this.fecha.toLocaleString();
}
}
