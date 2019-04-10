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

  constructor(private StakeholderService: StakeholderService, private route: ActivatedRoute) { }

  idStakeholder:number;
  
  /**
  * Eliminare un stakeholder
  */
  eliminarStakeholder(Id:number): void {
    this.StakeholderService.deleteStakeholder(Id);
  }

  ngOnInit() {
    this.idStakeholder = +this.route.snapshot.paramMap.get('id');
  } 
}