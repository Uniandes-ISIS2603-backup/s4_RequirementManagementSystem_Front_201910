import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';


import { Stakeholder } from '../../stakeholder/stakeholder';
import { StakeholderService } from '../../stakeholder/stakeholder.service';
@Component({
  selector: 'app-create-stakeholder',
  templateUrl: './create-stakeholder.component.html',
  styleUrls: ['./create-stakeholder.component.css']
})
export class CreateStakeholderComponent implements OnInit {

  //Stakeholder a crear
  stakeholder: Stakeholder;

  //constructor con variables a usar
  constructor(private StakeholderService: StakeholderService, private route: ActivatedRoute) { }

  /**
  * Crea un nuevo Stakeholder
  */
   createStakeholder(): Stakeholder {
    this.StakeholderService.createStakeholder(this.stakeholder).subscribe(Stakeholder => {
      this.stakeholder.nombre = Stakeholder.nombre;
      this.stakeholder.tipo = Stakeholder.tipo
    }
    );
    return this.stakeholder;
  }

  //Inicializacion del componenete, inicializa objeto stakeholder
  ngOnInit() {
    this.stakeholder = new Stakeholder();
    this.stakeholder.id = Math.floor(Math.random() * 9999) + 1;
  } 
}