import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import { Organizacion } from '../organizacion';
import {Stakeholder} from '../../stakeholder/stakeholder'
import { OrganizacionService } from '../organizacion.service';
import {StakeholderService} from '../../stakeholder/stakeholder.service'
@Component({
  selector: 'app-create-organizacion',
  templateUrl: './create-organizacion.component.html',
  styleUrls: ['./create-organizacion.component.css']
})
export class CreateOrganizacionComponent implements OnInit {

  organizacion: Organizacion;
  stakeholder: Stakeholder;

  constructor(private organizacionService: OrganizacionService, private stakeholderService: StakeholderService, private route: ActivatedRoute) { }

/*   getStakeholder(stakeholderId): Stakeholder{
      this.stakeholderService.getStakeholder(stakeholderId).subscribe(Stakeholder => {
      this.stakeholder= Stakeholder;
    });
    return this.stakeholder;
  } */
  /**
  * Creates a new Organizacion
  */
  createOrganizacion(): Organizacion {
      //this.getStakeholder(id);
      this.organizacionService.createOrganizacion(this.organizacion).subscribe(Organizacion => {
      this.organizacion.nombre = Organizacion.nombre;
      this.organizacion.sector = Organizacion.sector;
    });
    return this.organizacion;
  }

  ngOnInit() {
    this.organizacion = new Organizacion();
    this.stakeholder = new Stakeholder();
    this.organizacion.id = Math.floor(Math.random() * 9999) + 1;
  } 
}