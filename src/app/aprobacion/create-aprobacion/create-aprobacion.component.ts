import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AprobacionService } from '../aprobacion.service';
import { AprobacionDetail } from '../aprobacion-detail';

@Component({
  selector: 'app-create-aprobacion',
  templateUrl: './create-aprobacion.component.html',
  styleUrls: ['./create-aprobacion.component.css']
})
export class CreateAprobacionComponent implements OnInit {

  constructor(
    private aprobacionService: AprobacionService,
    private toastrService: ToastrService,
    router: Router
) {}

aprobacionDetail: AprobacionDetail;
fecha: Date;


  /**
    * The output which tells the parent component
    * that the user no longer wants to create a review.
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new review.
   */
   @Output() create = new EventEmitter();


   createAprobacion(): AprobacionDetail {
     console.log(this.aprobacionDetail);
    this.aprobacionService.createAprobacion(this.aprobacionDetail)
        .subscribe((aprobacionDetail) => {
            this.aprobacionDetail = aprobacionDetail;
            this.create.emit();
            this.toastrService.success("The review was created", "Review creation");
        }, err => {
            this.toastrService.error(err, "Error");
        });
        this.fecha = new Date();
        this.fecha.toString;
        this.aprobacionDetail.fechaYHora = this.fecha.toString();
    return this.aprobacionDetail;
}

/**
* Informs the parent component that the user no longer wants to create a review.
*/
cancelCreation(): void {
    this.cancel.emit();
}

/**
* This function will initialize the component
*/
ngOnInit() {
    this.aprobacionDetail = new AprobacionDetail();
}


}
