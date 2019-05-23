import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CambioService } from '../cambio.service';
import { ToastrService } from 'ngx-toastr';
import { CambioDetail } from '../cambio-detail';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cambio-create',
  templateUrl: './cambio-create.component.html',
  styleUrls: ['./cambio-create.component.css']
})
/**
 * Component that creates a new change
 */
export class CambioCreateComponent implements OnInit {

   /**
    * Constructor for the component
    * @param cambioService The change's service provider
    * @param toastrService The toastr to show messages to the user 
    * @param router The router of the component
    */
  constructor(
    private cambioService: CambioService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
) {}
  /**
  * The new change to be created.
  * It is a detail because of the description of the change.
  */
  cambioDetail: CambioDetail;

  /**
  * Current time in which the creation of the change took place.
  */
  fecha: Date;

  /**
    * The output which tells the parent component
    * that the user no longer wants to create a change
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new change
   */
   @Output() create = new EventEmitter();

  /**
  * Creates a new change and initializes the date, so that it is the current date-time. 
  */
   createCambio(): CambioDetail {
     console.log(this.cambioDetail);
     const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    const cambioId = +this.route.snapshot.paramMap.get('cambioId');
    this.cambioService.createCambio(proyectoId, objetivoId, requisitoId, this.cambioDetail)
        .subscribe((cambioDetail) => {
            this.cambioDetail = cambioDetail;
            this.create.emit();
            this.toastrService.success("The change was created", "Change creation");
        }, err => {
            this.toastrService.error(err, "Error");
        });
    return this.cambioDetail;
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
    this.cambioDetail = new CambioDetail();
    this.fecha = new Date();
    this.fecha.toLocaleString();
    this.cambioDetail.fechaYHora = this.fecha.toLocaleString();
}


}
