import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OrganizacionService } from '../organizacion.service';
import { OrganizacionDetail } from '../organizacion.detail';
import { Stakeholder } from 'src/app/stakeholder/stakeholder';
import { Organizacion } from '../organizacion';

/**
 * Component that shows the detail of a specific case of use.
 */
@Component({
  selector: 'app-organizacion-detail',
  templateUrl: './organizacion-detail.component.html',
  styleUrls: ['./organizacion-detail.component.css']
})
export class OrganizacionDetailComponent implements OnInit {

  organizacionDetail: OrganizacionDetail;
  listaStakeholders: Stakeholder[];

  /**
    * The component's constructor
    * @param organizacionService The case's service
    * @param route The route element which helps to obtain the condition's id
    */
  constructor(private organizacionService: OrganizacionService, private route: ActivatedRoute) { }

  /**
    * The method which retrieves the comment (detail) of a case of use
    */
  getOrganizacionesDetail(): void {

    this.organizacionService.getOrganizacionesDetail(this.organizacionDetail.id).subscribe(organizacion => {
        this.organizacionDetail.nombre = organizacion.nombre;
        this.organizacionDetail.sector = organizacion.sector;
        this.listaStakeholders = organizacion.stakeholders;
        this.organizacionDetail.stakeholders = organizacion.stakeholders;
        console.log("Stake....." , organizacion.stakeholders);
        //console.log("Nombre....." , this.organizacionDetail.nombre);
        //console.log("Stake....." , this.listaStakeholders[0]);
      });
  }

  /**
    * The method which initializes the component
    * We need to initialize the case of use so that it is never considered as undefined
    */
  ngOnInit() {
    this.organizacionDetail = new OrganizacionDetail();
    this.organizacionDetail.id = +this.route.snapshot.paramMap.get('id');
    this.getOrganizacionesDetail();
  }
}
