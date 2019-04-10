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

  stakeholder: Stakeholder;

  constructor(private StakeholderService: StakeholderService, private route: ActivatedRoute) { }

  /**
  * Creates a new Stakeholder
  */
   createStakeholder(): Stakeholder {
    this.StakeholderService.createStakeholder(this.stakeholder).subscribe(Stakeholder => {
      //this.stakeholder.id = Math.floor(Math.random() * 99) + 1  ;
      this.stakeholder.nombre = Stakeholder.nombre;
      this.stakeholder.tipo = Stakeholder.tipo
    }
    );
    return this.stakeholder;
  }

  ngOnInit() {
    this.stakeholder = new Stakeholder();
    this.stakeholder.id = Math.floor(Math.random() * 9999) + 1;
  } 
}