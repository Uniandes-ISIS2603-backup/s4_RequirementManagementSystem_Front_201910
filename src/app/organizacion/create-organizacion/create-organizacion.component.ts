import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import { Organizacion } from '../organizacion';
import { OrganizacionService } from '../organizacion.service';
@Component({
  selector: 'app-create-organizacion',
  templateUrl: './create-organizacion.component.html',
  styleUrls: ['./create-organizacion.component.css']
})
export class CreateOrganizacionComponent implements OnInit {

  organizacion: Organizacion;

  constructor(private OrganizacionService: OrganizacionService, private route: ActivatedRoute) { }

  /**
  * Creates a new Organizacion
  */
  createOrganizacion(): Organizacion {
    this.OrganizacionService.createOrganizacion(this.organizacion).subscribe(Organizacion => {
      this.organizacion.id = Organizacion.id;
      this.organizacion.nombre = Organizacion.nombre;
      this.organizacion.sector = Organizacion.sector;
    }
    );
    return this.organizacion;
  }

  ngOnInit() {
    this.organizacion = new Organizacion();
  } 
}