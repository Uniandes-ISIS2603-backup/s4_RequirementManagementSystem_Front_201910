import { Component, OnInit } from '@angular/core';
import { Casodeuso } from '../casodeuso';
import { CasodeusoService } from '../casodeuso.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-casodeuso-list',
  templateUrl: './casodeuso-list.component.html',
  styleUrls: ['./casodeuso-list.component.css']
})
export class CasodeusoListComponent implements OnInit {

  constructor(private casodeusoService: CasodeusoService,private router: Router) { }

  casosdeuso: Casodeuso[];

  getCasosdeuso(): void {
    this.casodeusoService.getCasosdeuso().subscribe(casosdeuso => this.casosdeuso = casosdeuso);
  }

  ngOnInit() {
    this.getCasosdeuso();
  }

}
