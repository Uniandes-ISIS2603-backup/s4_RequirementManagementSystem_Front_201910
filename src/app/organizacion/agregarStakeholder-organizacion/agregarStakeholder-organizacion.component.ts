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
  stakeholder: Stakeholder;

  //Constructor del componente con variables a usar
  constructor(private organizacionService: OrganizacionService, private stakeholderService: StakeholderService, private route: ActivatedRoute) { }

  //Obtener el stakeholder dado por id ingresado por usuario
  getStakeholder(): Stakeholder {
    this.stakeholderService.getStakeholder(this.stakeholder.id).subscribe(Stakeholder => {
      this.stakeholder.id = Stakeholder.id;
      this.stakeholder.nombre = Stakeholder.nombre;
      this.stakeholder.tipo = Stakeholder.tipo;
    });
    return this.stakeholder;
  }

  //Obtener la organizacion dado por id ingresado por usuario
  getOrganizacion(): Organizacion {
    this.organizacionService.getOrganizacion(this.organizacion.id).subscribe(Organizacion => {
      this.organizacion.id = Organizacion.id;
      this.organizacion.nombre = Organizacion.nombre;
      this.organizacion.sector = Organizacion.sector;
      this.organizacion.stakeholders = Organizacion.stakeholders;
    });
    return this.organizacion;
  }

  /**
  * Agregar a la organizacion un stakeholder
  */
  agegarStakeholderOrganizacion(): Organizacion {
    this.organizacionService.updateOrganizacion(this.getOrganizacion()).subscribe(Organizacion => {
      this.organizacion.stakeholders.push(this.getStakeholder());
    });
    return this.organizacion;
  }

  //Inicializacion del componente, inicializacion de la organizacion y stakeholder a vincular
  ngOnInit() {
    this.organizacion = new Organizacion();
    this.stakeholder = new Stakeholder();
  }
}