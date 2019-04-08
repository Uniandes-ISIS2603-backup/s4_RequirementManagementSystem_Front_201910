import { Component, OnInit } from '@angular/core';
import { Casodeuso } from '../casodeuso';
import { CasodeusoService } from '../casodeuso.service';

@Component({
  selector: 'app-list-casodeuso',
  templateUrl: './list-casodeuso.component.html',
  styleUrls: ['./list-casodeuso.component.css']
})
export class ListCasodeusoComponent implements OnInit {

  constructor(private casodeusoService: CasodeusoService) { }

  ngOnInit() {
  }

}
