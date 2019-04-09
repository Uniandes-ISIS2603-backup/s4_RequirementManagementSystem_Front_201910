import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import { OrganizacionService } from '../organizacion.service';
@Component({
  selector: 'app-eliminar-organizacion',
  templateUrl: './eliminar-organizacion.component.html',
  styleUrls: ['./eliminar-organizacion.component.css']
})
export class EliminarOrganizacionComponent implements OnInit {

  constructor(private OrganizacionService: OrganizacionService, private route: ActivatedRoute) { }

  idOrganizacion:number;
  /**
  * Eliminare un organizacion
  */
  eliminarOrganizacion(Id:number): void {
    this.OrganizacionService.deleteOrganizacion(Id);
  }

  ngOnInit() {
    
  } 
}