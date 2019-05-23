import { Component, OnInit } from '@angular/core';
import { Casodeuso } from '../casodeuso';
import { CasodeusoService } from '../casodeuso.service';
import { Router, ActivatedRoute } from '@angular/router';
import {CasodeusoDetail} from '../casodeuso-detail';

/**
* The component for the list of cases of use in the Requirement Management System
*/
@Component({
  selector: 'app-casodeuso-list',
  templateUrl: './casodeuso-list.component.html',
  styleUrls: ['./casodeuso-list.component.css']
})
export class CasodeusoListComponent implements OnInit {

  /**
   * Constructor of the component.
   * @param casodeusoService The case's services provider.
   * @param router The router of the component.
   */
  constructor(private casodeusoService: CasodeusoService,private router: Router, private route: ActivatedRoute) { }

  /**
  * The list of cases that belong to the Requirement Management System.
  */
  casosdeuso: CasodeusoDetail[];
  
  /**
   * Id of the selected case of use
   */
  casodeuso_id:number;

  /**
   * condicionDetail, which shows the selected case of use to be shown. 
   */
  selectedCasodeuso: CasodeusoDetail;

  /**
    * Asks the service to update the list of cases.
    */
  getCasosdeuso(): void {
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    this.casodeusoService.getCasosdeuso(proyectoId, objetivoId, requisitoId).subscribe(casosdeuso => this.casosdeuso = casosdeuso);
  }

  /**
   * Method that executes when the case of use with the casodeuso_id is selected
   * @param casodeuso_id id of the selected case of use 
   */
  onSelected(casodeuso_id: number): void {
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
        this.casodeusoService.getCasosdeusoDetail(proyectoId, objetivoId, requisitoId, casodeuso_id).subscribe(o => {
          this.casodeuso_id = casodeuso_id;
          this.selectedCasodeuso = new CasodeusoDetail();
          this.selectedCasodeuso = o;
      console.log("EN  ls lista", this.selectedCasodeuso) ;
     console.log(o) ;
    });
  }

  /**
    * This will initialize the component by retrieving the list of cases from the service
    * This method will be called when the component is created
    */
  ngOnInit() {
    this.getCasosdeuso();
    
  }

}
