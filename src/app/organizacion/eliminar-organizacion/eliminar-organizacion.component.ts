import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import { OrganizacionService } from '../organizacion.service';
import { ResourceLoader } from '@angular/compiler';
@Component({
  selector: 'app-eliminar-organizacion',
  templateUrl: './eliminar-organizacion.component.html',
  styleUrls: ['./eliminar-organizacion.component.css']
})
export class EliminarOrganizacionComponent implements OnInit {

  //Constructor del componente con variables a usar
  constructor(private OrganizacionService: OrganizacionService, private route: ActivatedRoute) { }

  /**
  * Eliminar una organizacion
  */
  eliminarOrganizacion(id: number): void {
    this.OrganizacionService.deleteOrganizacion(id).subscribe();
  }

  //Inicializacion del componente
  ngOnInit() {
  }
}