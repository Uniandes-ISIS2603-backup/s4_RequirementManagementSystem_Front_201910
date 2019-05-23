import { Component, OnInit } from '@angular/core';
import { Condicion } from '../condicion';
import { CondicionService } from '../condicion.service';
import { Router, ActivatedRoute } from '@angular/router';
import {CondicionDetail} from '../condicion-detail';

/**
* The component for the list of conditions in the Requirement Management System
*/
@Component({
  selector: 'app-condicion-list',
  templateUrl: './condicion-list.component.html',
  styleUrls: ['./condicion-list.component.css']
})
export class CondicionListComponent implements OnInit {

  /**
   * Constructor of the component.
   * @param condicionService The condition's services provider.
   * @param router The router of the component.
   */
  constructor(private condicionService: CondicionService,private router: Router, private route: ActivatedRoute) { }

  /**
    * The list of conditions that belong to the Requirement Management System.
    */
  condiciones: Condicion[];

  /**
   * Id of the selected condition
   */
  condicion_id:number;
  
  /**
   * condicionDetail, which shows the selected condition to be shown. 
   */
  selectedCondicion: CondicionDetail;

  /**
    * Asks the service to update the list of conditions.
    */
  getCondiciones(): void {
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    const casoDeUsoId = +this.route.snapshot.paramMap.get('casoDeUsoId');
    this.condicionService.getCondiciones(proyectoId, objetivoId, requisitoId, casoDeUsoId).subscribe(condiciones => this.condiciones = condiciones);
  }

  /**
   * Method that executes when the condition with the condition_id is selected
   * @param condicion_id id of the selected condition 
   */
  onSelected(condicion_id: number): void {
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    const casoDeUsoId = +this.route.snapshot.paramMap.get('casoDeUsoId');
        console.log("condicion: ", condicion_id);
    this.condicionService.getCondicionesDetail(proyectoId, objetivoId, requisitoId, casoDeUsoId, condicion_id).subscribe(o => {
      this.condicion_id = condicion_id;
      this.selectedCondicion = new CondicionDetail();
      this.selectedCondicion = o;
      console.log("EN  ls lista") ;
     console.log(o) ;
    });
  }

  /**
    * This will initialize the component by retrieving the list of conditions from the service
    * This method will be called when the component is created
    */
  ngOnInit() {
    this.getCondiciones();
  }

}
