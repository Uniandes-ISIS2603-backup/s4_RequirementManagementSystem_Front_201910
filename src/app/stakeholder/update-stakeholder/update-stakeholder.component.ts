import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';


import { Stakeholder } from '../stakeholder';
import { StakeholderService } from '../stakeholder.service';
@Component({
  selector: 'app-update-stakeholder',
  templateUrl: './update-stakeholder.component.html',
  styleUrls: ['./update-stakeholder.component.css']
})
export class UpdateStakeholderComponent implements OnInit {

  //objeto tipo stakeholder, almacenara la informacion a acutalizar
  stakeholder: Stakeholder;

  //Constructor con variables a usar
  constructor(private StakeholderService: StakeholderService, private route: ActivatedRoute) { }

  /**
  * Actualiza un Stakeholder
  */
  updateStakeholder(): Stakeholder {
    this.StakeholderService.updateStakeholder(this.stakeholder).subscribe(Stakeholder => {
      this.stakeholder.nombre = Stakeholder.nombre;
      this.stakeholder.tipo = Stakeholder.tipo
    }
    );
    return this.stakeholder;
  }

  //inicializacion del objeto stakeholder
  ngOnInit() {
    this.stakeholder = new Stakeholder();
  }
}