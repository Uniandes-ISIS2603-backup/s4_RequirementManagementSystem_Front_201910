import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
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
  organizaciones: Organizacion[];
  actElim:number;
  id:number;
  cambioLista:Boolean = false;
 
  /**
   * Constructor
   */
  constructor(private OrganizacionService: OrganizacionService, private route: ActivatedRoute) { }

  /**
  * Obtener lista de todas las organizacions
  */
  getOrganizacions(): void {
    this.OrganizacionService.getOrganizaciones().subscribe(organizacions => { this.organizaciones = organizacions; });
  }

  clickSH(id:number): void{
    this.actElim = 3;
    this.id = id;
    console.log("Printing id de SH:", id);
  }

  clickP(id:number): void{
    this.actElim = 4;
    this.id = id;
    console.log("Printing id de P:", id);
  }
  
  ngOnChanges(changes: SimpleChanges){
    this.getOrganizacions();
  }
  /**
  * Inicializacion del componente
  */
  ngOnInit() {
    this.getOrganizacions();
    this.actElim = 0;
    this.id = 0;
  }

}
