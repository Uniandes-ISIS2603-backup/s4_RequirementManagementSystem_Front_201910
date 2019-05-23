import { Component, OnInit } from '@angular/core';
import { Requisito } from '../requisito';
import { RequisitoService } from '../requisito.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listar-requisitos',
  templateUrl: './listar-requisitos.component.html',
  styleUrls: ['./listar-requisitos.component.css']
})
/**
* El componente para la lista de requisitos en la aplicación Requirement Management System.
*/
export class ListarRequisitosComponent implements OnInit {

  /**
   * Lista de requisitos a desplegar.
   */
  reqs: Requisito[];
  /**
   * Constructor del componente
   * @param reqS El proveedor de servicios para los Requisitos
   * @param router El ruteador del componente.
   */
  constructor(private reqS: RequisitoService, private router: Router, private route: ActivatedRoute) { }

  /**
   * Métodos a realizar post-inicialización del componente. Una vez la instancia del componente existe,
   * lo lógico es que se pidan los requisitos asíncronamente a la DB. 
   */
  ngOnInit() {
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    this.reqS.getRequisitos(proyectoId, objetivoId).subscribe(reqs => this.reqs = reqs);
  }

}
