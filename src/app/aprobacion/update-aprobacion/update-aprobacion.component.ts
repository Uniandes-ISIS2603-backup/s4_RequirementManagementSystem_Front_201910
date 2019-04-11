import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AprobacionService } from '../aprobacion.service';
import { ToastrService } from 'ngx-toastr';
import { AprobacionDetail } from '../aprobacion-detail';

@Component({
  selector: 'app-update-aprobacion',
  templateUrl: './update-aprobacion.component.html',
  styleUrls: ['./update-aprobacion.component.css']
})
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
* The id of the approbation that the user wants to edit
* This is passed as a parameter by the parent component
*/
@Input() aprobacion_id: number;

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
* The change to edit
*/
aprobacionDetail: AprobacionDetail;

/**
* Retrieves the information of the change
*/
getAprobacion(id: number): void {
    this.aprobacionService.getAprobacionDetail(id)
        .subscribe(aprobacion => {
            this.aprobacionDetail = aprobacion;
        });
}

/**
* Updates the change's information
*/
editAprobacion(): void {
    this.aprobacionService.updateAprobacion(this.aprobacionDetail)
        .subscribe(() => {
            this.update.emit();
            this.toastrService.success("The approbation's information was updated", "Approbation edition");
        });
        console.log(this.aprobacionDetail);
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
    this.aprobacionDetail = new AprobacionDetail();
}

/**
* The function which is called every time the user chooses to edit a different editorial
*/
ngOnChanges() {
    this.ngOnInit();
}
}