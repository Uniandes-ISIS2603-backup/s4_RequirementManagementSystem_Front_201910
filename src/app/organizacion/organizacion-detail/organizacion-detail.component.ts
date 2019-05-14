import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OrganizacionService } from '../organizacion.service';
import { OrganizacionDetail } from '../organizacion.detail';
import { Stakeholder } from '../../stakeholder/stakeholder';
import { Organizacion } from '../organizacion';
import { ListarOrganizacionComponent } from '../listar-organizacion/listar-organizacion.component'

/**
 * Component that shows the detail of a specific case of use.
 */
@Component({
  selector: 'app-organizacion-detail',
  templateUrl: './organizacion-detail.component.html',
  styleUrls: ['./organizacion-detail.component.css']
})
export class OrganizacionDetailComponent implements OnInit {

  organizacionDetail: Organizacion;
  listaStakeholders: Stakeholder[];

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

    this.organizacionService.getOrganizacionesDetail(this.lista.id).subscribe(organizacion => {
      this.organizacionDetail = organizacion;
      this.listaStakeholders = organizacion.stakeholders;
      console.log("Stake.....", organizacion.nombre);
    });
  }

  /**
    * The method which initializes the component
    * We need to initialize the case of use so that it is never considered as undefined
    */
  ngOnInit() {
    this.organizacionDetail = new Organizacion();
    this.getOrganizacionesDetail();
    this.listaStakeholders = this.organizacionDetail.stakeholders;
    console.log(this.listaStakeholders)
    console.log(this.lista.id)
  }
}
