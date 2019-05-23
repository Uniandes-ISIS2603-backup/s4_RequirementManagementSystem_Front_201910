import { Component, OnInit } from '@angular/core';
import { Cambio } from '../cambio';
import { CambioService } from '../cambio.service';
import 'rxjs/add/operator/filter';
import { Router, ActivatedRoute } from '@angular/router';
import { CambioDetail } from '../cambio-detail';

@Component({
  selector: 'app-listar-cambio',
  templateUrl: './listar-cambio.component.html',
  styleUrls: ['./listar-cambio.component.css']
})
/**
* The component for the list of changes in the Requirement Management System
*/
export class ListarCambioComponent implements OnInit {

  /**
  * Constructor of the component.
  * @param cambioService The change's services provider.
  * @param router The router of the component.
  */
  constructor(private cambioService: CambioService, private router: Router, private route: ActivatedRoute) { }

  /**
    * The list of changes that belong to the Requirement Management System.
    */
  cambios: Cambio[];
  /**
   * Id of the selected change.
   */
  cambio_id: number;

  /**
   * cambioDetail, which shows the selected change to be shown in the detail.
   */
  selectedCambio: CambioDetail;

  /**
  * Asks the service to update the list of changes.
  */
  getCambios(): void {
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    console.log(requisitoId);

    this.cambioService.getCambios(proyectoId, objetivoId, requisitoId).subscribe(cambios => this.cambios = cambios);
  }

  /**
   * Method that executes when the change with the cambio_id is selected
   * @param cambio_id id of the selected change.
   */
  onSelected(cambio_id: number): void {
    this.cambio_id = cambio_id;
    this.selectedCambio = new CambioDetail();
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    this.cambioService.getCambioDetail(proyectoId, objetivoId, requisitoId, cambio_id).subscribe(o => {
    this.selectedCambio = o;
      console.log("En la lista");
      console.log(o);
    });
  }

  /**
    * This will initialize the component by retrieving the list of changes from the service
    * This method will be called when the component is created
    */
  ngOnInit() {

    this.getCambios();

  }

}




