import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';


import { Stakeholder } from '../../stakeholder/stakeholder';
import { StakeholderService } from '../../stakeholder/stakeholder.service';
import { OrganizacionService } from '../../organizacion/organizacion.service';
import { Organizacion } from '../../organizacion/organizacion';
import { ListarStakeholderComponent } from '../listar-stakeholder/listar-stakeholder.component';
@Component({
  selector: 'app-create-stakeholder',
  templateUrl: './create-stakeholder.component.html',
  styleUrls: ['./create-stakeholder.component.css']
})
export class CreateStakeholderComponent implements OnInit {

  //objeto tipo organizacion
  organizaciones:Organizacion[];

  //Stakeholder a crear
  stakeholder: Stakeholder;

  //constructor con variables a usar
  constructor(private StakeholderService: StakeholderService, private organizacionService: OrganizacionService, private route: ActivatedRoute, private lista:ListarStakeholderComponent) { }

  /**
  * Obtener lista de todas las organizacions
  */
  getOrganizaciones(): void {
    this.organizacionService.getOrganizaciones().subscribe(organizacions => { this.organizaciones = organizacions; });
  }

  /**
  * Crea un nuevo Stakeholder
  */
   createStakeholder(): Stakeholder {
    this.StakeholderService.createStakeholder(this.stakeholder).subscribe(Stakeholder => {
      this.stakeholder.nombre = Stakeholder.nombre;
      this.stakeholder.tipo = Stakeholder.tipo;
      this.lista.ngOnInit();
    }
    );
    return this.stakeholder;
  }

  //Inicializacion del componenete, inicializa objeto stakeholder
  ngOnInit() {
    this.stakeholder = new Stakeholder();
    this.stakeholder.id = Math.floor(Math.random() * 99999) + 1;
    this.getOrganizaciones();
    this.stakeholder.organizacion = new Organizacion();
  } 
}