import { Component, OnInit } from '@angular/core';
import { AprobacionService } from '../aprobacion.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Aprobacion } from '../aprobacion';
import { AprobacionDetail } from '../aprobacion-detail';

@Component({
  selector: 'app-listar-aprobacion',
  templateUrl: './listar-aprobacion.component.html',
  styleUrls: ['./listar-aprobacion.component.css']
})
/**
* The component for the list of approbations in the Requirement Management System
*/
export class ListarAprobacionComponent implements OnInit {

  /**
   * Constructor of the component.
   * @param aprobacionService The approbation's services provider.
   * @param router The router of the component.
   */
  constructor(private aprobacionService: AprobacionService, private router: Router) { }

    /**
      * The list of approbations that belong to the Requirement Management System.
      */
    aprobaciones: Aprobacion[];
    /**
     * Id of the selected approbation
     */
    aprobacion_id: number;
  
    /**
     * aprobacionDetail, which shows the selected approbation to be shown. 
     */
    selectedAprobacion: AprobacionDetail;
    
    /**
    * Asks the service to update the list of approbations.
    */
    getAprobaciones(): void {
      this.aprobacionService.getAprobaciones().subscribe(aprobaciones => this.aprobaciones = aprobaciones);
      
    }
    /**
     * Method that executes when the approbation with the aprobacion_id is selected
     * @param aprobacion_id id of the selected approbation 
     */
    onSelected(aprobacion_id: number): void {
      this.aprobacion_id = aprobacion_id;
      this.selectedAprobacion = new AprobacionDetail();
      this.aprobacionService.getAprobacionDetail(aprobacion_id).subscribe(o => {this.selectedAprobacion = o;
        console.log("En  la lista") ;
       console.log(o) ;
      });
    }

    /**
    * This will initialize the component by retrieving the list of approbations from the service
    * This method will be called when the component is created
    */
  ngOnInit() {

      this.getAprobaciones();
        
  }

  

}
