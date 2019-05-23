import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import { Organizacion } from '../organizacion';
import { Stakeholder } from '../../stakeholder/stakeholder'
import { OrganizacionService } from '../organizacion.service';
import { StakeholderService } from '../../stakeholder/stakeholder.service'
import { Proyecto } from '../../proyecto/proyecto';
import { ProyectoService } from '../../proyecto/proyecto.service';
@Component({
  selector: 'app-proyecto-organizacion',
  templateUrl: './proyecto-organizacion.component.html',
  styleUrls: ['./proyecto-organizacion.component.css']
})

export class AgregarProyectoOrganizacionComponent implements OnInit {

  //Organizacion y stakeholder a vincular
  organizacion: Organizacion;
  organizaciones: Organizacion[];
  proyecto: Proyecto;
  proyectos: Proyecto[];

  //Constructor del componente con variables a usar
  constructor(private organizacionService: OrganizacionService, private route: ActivatedRoute, private proyectoService: ProyectoService) { }

  getOrganizaciones(): void {
    this.organizacionService.getOrganizaciones().subscribe(organizaciones => {
    this.organizaciones = organizaciones;
    });
  }

  getProyectos(): void{
    this.proyectoService.getProyectos().subscribe(proyectos => {this.proyectos = proyectos;})
  }
  
  /**
  * Agregar a la organizacion un stakeholder
  */
  agegarProyectoOrganizacion(): Organizacion {
    console.log("Organizacion ID:  ", this.organizacion.id);
    console.log("Proyecto ID:  ", this.proyecto.id);
    this.organizacionService.relacionOrganizacionProyecto(this.organizacion.id, this.proyecto.id, this.organizacion).subscribe(organizacion => {
      this.organizacion = organizacion;
    });
    return this.organizacion;
  }

  //Inicializacion del componente, inicializacion de la organizacion y stakeholder a vincular
  ngOnInit() {
    this.organizacion = new Organizacion();
    this.proyecto = new Proyecto();
    this.getOrganizaciones();
    this.getProyectos();
  }
}