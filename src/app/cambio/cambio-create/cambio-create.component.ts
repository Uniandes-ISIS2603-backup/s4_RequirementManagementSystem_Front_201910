import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CambioService } from '../cambio.service';
import { ToastrService } from 'ngx-toastr';
import { CambioDetail } from '../cambio-detail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambio-create',
  templateUrl: './cambio-create.component.html',
  styleUrls: ['./cambio-create.component.css']
})
export class CambioCreateComponent implements OnInit {

  constructor(
    private cambioService: CambioService,
    private toastrService: ToastrService,
    router: Router
) {}

cambioDetail: CambioDetail;
fecha: Date;


  /**
    * The output which tells the parent component
    * that the user no longer wants to create an editorial
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new editorial
   */
   @Output() create = new EventEmitter();


   createCambio(): CambioDetail {
     console.log(this.cambioDetail);
    this.cambioService.createCambio(this.cambioDetail)
        .subscribe((cambioDetail) => {
            this.cambioDetail = cambioDetail;
            this.create.emit();
            this.toastrService.success("The change was created", "Editorial creation");
        }, err => {
            this.toastrService.error(err, "Error");
        });
        this.fecha = new Date();
        this.fecha.toString;
        this.cambioDetail.fechaYHora = this.fecha.toString();
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
}


}
