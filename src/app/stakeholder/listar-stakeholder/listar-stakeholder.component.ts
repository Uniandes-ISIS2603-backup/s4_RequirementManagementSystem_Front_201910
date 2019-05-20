import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import { Stakeholder } from '../../stakeholder/stakeholder';
import { StakeholderService } from '../../stakeholder/stakeholder.service';
import { Organizacion } from '../../organizacion/organizacion';
import { OrganizacionService } from '../../organizacion/organizacion.service';


@Component({
  selector: 'app-listar-stakeholder',
  templateUrl: './listar-stakeholder.component.html',
  styleUrls: ['./listar-stakeholder.component.css']
})
export class ListarStakeholderComponent implements OnInit {

  /**
  * Lista de stakeholders
  */
  stakeholders: Stakeholder[];
  actElim:number;
  cambioLista:Boolean = false;

  organizaciones:Organizacion[];
  /**
   * Constructor
   */
  constructor(private stakeholderService: StakeholderService, private organizacionService: OrganizacionService, private route: ActivatedRoute) { }

  /**
  * Obtener lista de todos los stakeholders
  */
  getStakeholders(): void {
    this.stakeholderService.getStakeholders().subscribe(stakeholders => { this.stakeholders = stakeholders; 
    console.log("Stake", stakeholders[0]);
    });
  }

  getOrganizaciones(): void {
    this.organizacionService.getOrganizaciones().subscribe(organizacions => { this.organizaciones = organizacions; });
  }
  while(cambioLista){
    this.ngOnInit();
    this.cambioLista = false;
    console.log("Cambio:  ", this.cambioLista);
  }
  /**
  * Inicializacion del componente
  */
  ngOnInit() {
    this.getStakeholders();
    this.actElim = 0;
    this.getOrganizaciones();
  }

}
