import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import { Stakeholder } from '../../stakeholder/stakeholder';
import { StakeholderService } from '../../stakeholder/stakeholder.service';

@Component({
  selector: 'app-listar-stakeholder',
  templateUrl: './listar-stakeholder.component.html',
  styleUrls: ['./listar-stakeholder.component.css']
})
export class ListarStakeholderComponent implements OnInit {

  /**
  * Lista de stakeholders
  */
  stakeholders: Stakeholder[];
  actElim:number;
  /**
   * Constructor
   */
  constructor(private stakeholderService: StakeholderService, private route: ActivatedRoute) { }

  /**
  * Obtener lista de todos los stakeholders
  */
  getStakeholders(): void {
    this.stakeholderService.getStakeholders().subscribe(stakeholders => { this.stakeholders = stakeholders; });
  }

  /**
  * Inicializacion del componente
  */
  ngOnInit() {
    this.getStakeholders();
    this.actElim = 0;
  }

}
