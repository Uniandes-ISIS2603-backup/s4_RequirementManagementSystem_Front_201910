import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CaminoService } from '../camino.service';
import { ToastrService } from 'ngx-toastr';
import { CaminoDetail } from '../camino-detail';

@Component({
  selector: 'app-camino-update',
  templateUrl: './camino-update.component.html',
  styleUrls: ['./camino-update.component.css']
})
/**
 * Component that updates a specific camino
 */
export class CaminoUpdateComponent implements OnInit {

  /**
  * The component's constructor
  * @param caminoService The camino's service
  * @param toastrService The toastr to show messages to the user 
  */
  constructor(private caminoService: CaminoService,
    private toastrService: ToastrService) { }

   /**
  * The output which tells the parent component
  * that the user no longer wants to create a camino
  */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user updated a new camino
  */
  @Output() update = new EventEmitter();

  /**
  * The camino to edit
  */
  caminoDetail: CaminoDetail;

  /**
  * Retrieves the information of the camino
  */
  getCamino(id: number): void {
    this.caminoService.getCaminosDetail(id)
        .subscribe(camino => {
            this.caminoDetail = camino;
        });
  }

  /**
  * Updates the camino's information
  */
  editCamino(): void {
    this.caminoService.updateCamino(this.caminoDetail)
        .subscribe(() => {
            this.update.emit();
            this.toastrService.success("The camino information was updated", "camino edition");
        });
        console.log(this.caminoDetail);
  }

  /**
   * Informs the parent component that the user no longer wants to update the camino.
   */
  cancelEdition(): void {
    this.cancel.emit();
  }

  /**
  * The function which initializes the component
  */
  ngOnInit() {
    this.caminoDetail= new CaminoDetail();

  }

  /**
  * The function which is called every time the user chooses to edit a different camino
  */
  ngOnChanges() {
    this.ngOnInit();
  }

}
