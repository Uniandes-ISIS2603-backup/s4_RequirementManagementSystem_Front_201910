import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import { Organizacion } from '../organizacion';
import { Stakeholder } from '../../stakeholder/stakeholder'
import { OrganizacionService } from '../organizacion.service';
import { StakeholderService } from '../../stakeholder/stakeholder.service'
@Component({
  selector: 'app-agregarStakeholder-organizacion',
  templateUrl: './agregarStakeholder-organizacion.component.html',
  styleUrls: ['./agregarStakeholder-organizacion.component.css']
})

export class AgregarStakeholderOrganizacionComponent implements OnInit {

  //Organizacion y stakeholder a vincular
  organizacion: Organizacion;
  organizaciones: Organizacion[];
  stakeholder: Stakeholder;
  stakeholders: Stakeholder[];

  //Constructor del componente con variables a usar
  constructor(private organizacionService: OrganizacionService, private stakeholderService: StakeholderService, private route: ActivatedRoute) { }

  getOrganizaciones(): void {
    this.organizacionService.getOrganizaciones().subscribe(organizaciones => {
    this.organizaciones = organizaciones;
    });
  }

  getStakeholders(): void {
    this.stakeholderService.getStakeholders().subscribe(stakeholders => {
    this.stakeholders = stakeholders;
    });
  }
  
  /**
  * Agregar a la organizacion un stakeholder
  */
  agegarStakeholderOrganizacion(): Stakeholder {
    console.log("Organizacion ID:  ", this.organizacion.id);
    console.log("Stakeholder ID:  ", this.stakeholder.id);
    this.stakeholderService.updateStakeholder(this.stakeholder).subscribe(stakeholder => {
      this.stakeholder.organizacion.id = stakeholder.organizacion.id;
    });
    return this.stakeholder;
  }

  //Inicializacion del componente, inicializacion de la organizacion y stakeholder a vincular
  ngOnInit() {
    this.organizacion = new Organizacion();
    this.stakeholder = new Stakeholder();
    this.getOrganizaciones();
    this.getStakeholders();
  }
}