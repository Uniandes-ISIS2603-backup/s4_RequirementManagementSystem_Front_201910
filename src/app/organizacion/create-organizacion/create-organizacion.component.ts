import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import { Organizacion } from '../organizacion';
import { OrganizacionService } from '../organizacion.service';
import { ListarOrganizacionComponent } from '../listar-organizacion/listar-organizacion.component';
import { Proyecto } from '../../proyecto/proyecto';

@Component({
  selector: 'app-create-organizacion',
  templateUrl: './create-organizacion.component.html',
  styleUrls: ['./create-organizacion.component.css']
})
export class CreateOrganizacionComponent implements OnInit {
  
  //Organizacion a crear
  organizacion: Organizacion;

  proyectos: Proyecto[];

  //Constructor del componente con variables a usar
  constructor(private organizacionService: OrganizacionService, private route: ActivatedRoute, private lista:ListarOrganizacionComponent) { }

  //Crear organizacion
  createOrganizacion(): Organizacion {
    this.organizacionService.createOrganizacion(this.organizacion).subscribe(Organizacion => {
      this.organizacion.nombre = Organizacion.nombre;
      this.organizacion.sector = Organizacion.sector;
      this.lista.ngOnInit();
    });
    return this.organizacion;
  }

  //Inicializacion del componente, inicializacion de la organizacion a crear
  ngOnInit() {
    this.organizacion = new Organizacion();
    this.organizacion.id = Math.floor(Math.random() * 99999) + 999;
  }
}