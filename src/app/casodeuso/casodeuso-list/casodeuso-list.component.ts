import { Component, OnInit } from '@angular/core';
import { Casodeuso } from '../casodeuso';
import { CasodeusoService } from '../casodeuso.service';
import { Router } from '@angular/router';
import {CasodeusoDetail} from '../casodeuso-detail';

@Component({
  selector: 'app-casodeuso-list',
  templateUrl: './casodeuso-list.component.html',
  styleUrls: ['./casodeuso-list.component.css']
})
export class CasodeusoListComponent implements OnInit {

  constructor(private casodeusoService: CasodeusoService,private router: Router) { }

  casosdeuso: Casodeuso[];
  casodeuso_id:number;
  selectedCasodeuso: CasodeusoDetail;

  getCasosdeuso(): void {
    this.casodeusoService.getCasosdeuso().subscribe(casosdeuso => this.casosdeuso = casosdeuso);
  }

  onSelected(casodeuso_id: number): void {
    this.casodeuso_id = casodeuso_id;
    this.selectedCasodeuso = new CasodeusoDetail();
    console.log("casodeuso: ", casodeuso_id);
    this.casodeusoService.getCasosdeusoDetail(casodeuso_id).subscribe(o => {this.selectedCasodeuso = o;
      console.log("EN  ls lista") ;
     console.log(o) ;
    });
  }

  ngOnInit() {
    this.getCasosdeuso();
  }

}
