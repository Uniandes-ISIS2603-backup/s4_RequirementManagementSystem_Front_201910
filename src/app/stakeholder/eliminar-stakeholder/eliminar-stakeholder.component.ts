import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import { Stakeholder } from '../stakeholder';
import { StakeholderService } from '../stakeholder.service';
import { ListarStakeholderComponent } from '../listar-stakeholder/listar-stakeholder.component';

@Component({
  selector: 'app-eliminar-stakeholder',
  templateUrl: './eliminar-stakeholder.component.html',
  styleUrls: ['./eliminar-stakeholder.component.css']
})


export class EliminarStakeholderComponent implements OnInit {

  stakeholders: Stakeholder[];
  stakeholder: Stakeholder;

  //Constructor con variables a usar
  constructor(private stakeholderService: StakeholderService, private route: ActivatedRoute, private lista:ListarStakeholderComponent) { }

  getStakeholders(): void {
    this.stakeholderService.getStakeholders().subscribe(stakeholders => {
    this.stakeholders = stakeholders;
    });
  }

  /**
  * Eliminare un stakeholder
  */
  eliminarStakeholder(): void {
    this.stakeholderService.deleteStakeholder(this.stakeholder.id).subscribe();
    this.lista.ngOnInit();
  }

  //Inicializacion del componente
  ngOnInit() {

    this.getStakeholders();
    this.stakeholder = new Stakeholder();

  }
}