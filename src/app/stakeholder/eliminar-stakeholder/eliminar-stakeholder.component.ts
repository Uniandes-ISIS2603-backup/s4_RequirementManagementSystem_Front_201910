import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

import { StakeholderService } from '../stakeholder.service';
@Component({
  selector: 'app-eliminar-stakeholder',
  templateUrl: './eliminar-stakeholder.component.html',
  styleUrls: ['./eliminar-stakeholder.component.css']
})

export class EliminarStakeholderComponent implements OnInit {

  //Constructor con variables a usar
  constructor(private stakeholderService: StakeholderService, private route: ActivatedRoute) { }

  /**
  * Eliminare un stakeholder
  */
  eliminarStakeholder(id: number): void {
    this.stakeholderService.deleteStakeholder(id).subscribe();
  }

  //Inicializacion del componente
  ngOnInit() {
  }
}