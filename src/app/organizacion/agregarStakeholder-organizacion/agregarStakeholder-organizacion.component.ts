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

  organizacion: Organizacion;
  stakeholder: Stakeholder;

  constructor(private organizacionService: OrganizacionService, private stakeholderService: StakeholderService, private route: ActivatedRoute) { }

  getStakeholder(): Stakeholder {
    this.stakeholderService.getStakeholder(this.stakeholder.id).subscribe(Stakeholder => {
      this.stakeholder = Stakeholder;
    });
    return this.stakeholder;
  }

  getOrganizacion(): Organizacion {
    this.organizacionService.getOrganizacion(this.organizacion.id).subscribe(Organizacion => {
      this.organizacion = Organizacion;
    });
    return this.organizacion;
  }

  /**
  * Creates a new Organizacion
  */
  agegarStakeholderOrganizacion(): Organizacion {
    this.organizacionService.updateOrganizacion(this.getOrganizacion()).subscribe(Organizacion => {
      this.organizacion.stakeholders.push(this.getStakeholder());
    });
    return this.organizacion;
  }

  ngOnInit() {
    this.organizacion = new Organizacion();
    this.stakeholder = new Stakeholder();
    this.organizacion.id = Math.floor(Math.random() * 9999) + 1;
  }
}