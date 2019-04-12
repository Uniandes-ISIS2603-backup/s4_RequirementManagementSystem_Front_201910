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

  casosdeuso: CasodeusoDetail[];
  casodeuso_id:number;
  selectedCasodeuso: CasodeusoDetail;

  getCasosdeuso(): void {
    this.casodeusoService.getCasosdeuso().subscribe(casosdeuso => this.casosdeuso = casosdeuso);
  }

  onSelected(casodeuso_id: number): void {
        this.casodeusoService.getCasosdeusoDetail(casodeuso_id).subscribe(o => {
          this.casodeuso_id = casodeuso_id;
          this.selectedCasodeuso = new CasodeusoDetail();
          this.selectedCasodeuso = o;
      console.log("EN  ls lista", this.selectedCasodeuso) ;
     console.log(o) ;
    });
  }

  ngOnInit() {
    this.getCasosdeuso();
    
  }

}
