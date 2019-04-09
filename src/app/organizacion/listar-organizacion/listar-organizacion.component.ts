import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import { Organizacion } from '../organizacion';
import { OrganizacionService } from '../organizacion.service';

@Component({
  selector: 'app-listar-organizacion',
  templateUrl: './listar-organizacion.component.html',
  styleUrls: ['./listar-organizacion.component.css']
})
export class ListarOrganizacionComponent implements OnInit {

  /**
* Lista de organizacions
*/
  organizacions: Organizacion[];

  /**
   * Constructor
   */
  constructor(private OrganizacionService: OrganizacionService, private route: ActivatedRoute) { }

  /**
  * Obtener lista de todos los organizacions
  */
  getOrganizacions(): void {
    this.OrganizacionService.getOrganizacions()
      .subscribe(organizacions => {
        this.organizacions = organizacions;
      });
  }

  /**
  * Inicializacion del componente
  */
  ngOnInit() {
    this.getOrganizacions();
  }

}
