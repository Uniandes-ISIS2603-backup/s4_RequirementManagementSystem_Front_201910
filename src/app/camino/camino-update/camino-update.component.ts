import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CaminoService } from '../camino.service';
import { ToastrService } from 'ngx-toastr';
import { CaminoDetail } from '../camino-detail';
import { ActivatedRoute } from '@angular/router';

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
    private toastrService: ToastrService, private route: ActivatedRoute) { }

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
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    const casoDeUsoId = +this.route.snapshot.paramMap.get('casoDeUsoId');
    const caminoId = +this.route.snapshot.paramMap.get('caminoId');
    this.caminoService.getCaminosDetail(proyectoId, objetivoId, requisitoId, casoDeUsoId, caminoId)
        .subscribe(camino => {
            this.caminoDetail = camino;
        });
  }

  /**
  * Updates the camino's information
  */
  editCamino(): void {
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    const casoDeUsoId = +this.route.snapshot.paramMap.get('casoDeUsoId');
    const caminoId = +this.route.snapshot.paramMap.get('caminoId');
    this.caminoService.updateCamino(proyectoId, objetivoId, requisitoId, casoDeUsoId, caminoId, this.caminoDetail)
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
