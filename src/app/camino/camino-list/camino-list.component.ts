import { Component, OnInit } from '@angular/core';
import { Camino } from '../camino';
import { CaminoService } from '../camino.service';
import { Router } from '@angular/router';
import {CaminoDetail} from '../camino-detail';

/**
* The component for the list of caminos in the Requirement Management System
*/
@Component({
  selector: 'app-camino-list',
  templateUrl: './camino-list.component.html',
  styleUrls: ['./camino-list.component.css']
})
export class CaminoListComponent implements OnInit {

  /**
   * Constructor of the component.
   * @param caminoService The camino's services provider.
   * @param router The router of the component.
   */
  constructor(private caminoService: CaminoService,private router: Router) { }

  /**
    * The list of caminos that belong to the Requirement Management System.
    */
  caminos: Camino[];

  /**
   * Id of the selected camino
   */
  camino_id:number;
  
  /**
   * caminoDetail, which shows the selected camino to be shown. 
   */
  selectedCamino: CaminoDetail;

  /**
    * Asks the service to update the list of caminos.
    */
  getCaminos(): void {
    this.caminoService.getCaminos().subscribe(caminos => this.caminos = caminos);
  }

  /**
   * Method that executes when the camino with the camino_id is selected
   * @param camino_id id of the selected camino 
   */
  onSelected(camino_id: number): void {
        console.log("camino: ", camino_id);
    this.caminoService.getCaminosDetail(camino_id).subscribe(o => {
      this.camino_id = camino_id;
      this.selectedCamino = new CaminoDetail();
      this.selectedCamino = o;
      console.log("EN  ls lista") ;
     console.log(o) ;
    });
  }

  /**
    * This will initialize the component by retrieving the list of caminos from the service
    * This method will be called when the component is created
    */
  ngOnInit() {
    this.getCaminos();
  }

}
