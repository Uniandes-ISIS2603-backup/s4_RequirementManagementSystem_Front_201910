import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { AprobacionService } from '../aprobacion.service';
import { AprobacionDetail } from '../aprobacion-detail';

@Component({
  selector: 'app-create-aprobacion',
  templateUrl: './create-aprobacion.component.html',
  styleUrls: ['./create-aprobacion.component.css']
})
/**
 * Component that creates a new approbation
 */
export class CreateAprobacionComponent implements OnInit {

   /**
    * Constructor for the component
    * @param aprobacionService The approbation's service provider
    * @param toastrService The toastr to show messages to the user 
    * @param router The router of the component
    */
  constructor(
    private aprobacionService: AprobacionService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
) {}

/**
 * The new approbation to be created.
 * It is a detail because of the comment on the approbation.
 */
aprobacionDetail: AprobacionDetail;

/**
 * Current time in which the creation of the approbation took place.
 */
fecha: Date;


  /**
    * The output which tells the parent component
    * that the user no longer wants to create an approbation.
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new approbation.
   */
   @Output() create = new EventEmitter();

/**
 * Creates a new approbation and initializes the date, so that it is the current date-time. 
 */
   createAprobacion(): AprobacionDetail {
     console.log(this.aprobacionDetail);
     const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
     const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
     const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    this.aprobacionService.createAprobacion(proyectoId, objetivoId, requisitoId, this.aprobacionDetail)
        .subscribe((aprobacionDetail) => {
            this.aprobacionDetail = aprobacionDetail;
            this.create.emit();
            this.toastrService.success("The approbation was created", "Approbation creation");
        }, err => {
            this.toastrService.error(err, "Error");
        });
    return this.aprobacionDetail;
}

/**
* Informs the parent component that the user no longer wants to create an approbation.
*/
cancelCreation(): void {
    this.cancel.emit();
}

/**
* This function will initialize the component
*/
ngOnInit() {
    this.aprobacionDetail = new AprobacionDetail();
    this.fecha = new Date();
        this.fecha.toLocaleString();
        this.aprobacionDetail.fechaYHora = this.fecha.toLocaleString();
}


}
