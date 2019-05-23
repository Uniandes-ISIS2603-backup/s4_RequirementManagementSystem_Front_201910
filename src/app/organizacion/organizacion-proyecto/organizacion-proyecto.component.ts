import { Component, OnInit, Input, ViewChild, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OrganizacionService } from '../organizacion.service';
import { Stakeholder } from '../../stakeholder/stakeholder';
import { Organizacion } from '../organizacion';
import { ListarOrganizacionComponent } from '../listar-organizacion/listar-organizacion.component'

/**
 * Component that shows the detail of a specific case of use.
 */
@Component({
  selector: 'app-organizacion-proyecto',
  templateUrl: './organizacion-proyecto.component.html',
  styleUrls: ['./organizacion-proyecto.component.css']
})
export class OrganizacionProyectoComponent implements OnInit {

  @Input() public valor: String;

  organizacionProyectos: Organizacion;
  listaStakeholders: Stakeholder[];
  lista1: number[];

  /**
    * The component's constructor
    * @param organizacionService The case's service
    * @param route The route element which helps to obtain the condition's id
    */
  constructor(private organizacionService: OrganizacionService, private route: ActivatedRoute, private lista: ListarOrganizacionComponent) { }

  /**
    * The method which retrieves the comment (detail) of a case of use
    */
  getOrganizacionesDetail(): void {

    this.organizacionService.getOrganizacionesDetail(this.valor).subscribe(organizacion => {
      this.organizacionProyectos = organizacion;
      //console.log("Organizacion.....", this.organizacionProyectos.nombre);
      console.log("Organizacion proyecto.....", this.organizacionProyectos.proyectos);
    });
  }

  /**
    * The method which initializes the component
    * We need to initialize the case of use so that it is never considered as undefined
    */

  ngOnChanges(changes: SimpleChanges){
    console.log("Valor>>>:", this.valor);
    this.getOrganizacionesDetail();
  }
  ngOnInit() {
    
    this.organizacionProyectos = new Organizacion();
    console.log(this.lista.id)
    this.getOrganizacionesDetail();
    console.log("Organizacion.....", this.organizacionProyectos.nombre);
    //this.listaStakeholders = this.organizacionProyectos.stakeholders;    
  }
}
