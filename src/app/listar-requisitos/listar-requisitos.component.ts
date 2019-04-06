import { Component, OnInit } from '@angular/core';
import { Requisito } from '../requisito';
import { RequisitoService } from '../requisito.service';


@Component({
  selector: 'app-listar-requisitos',
  templateUrl: './listar-requisitos.component.html',
  styleUrls: ['./listar-requisitos.component.css']
})
export class ListarRequisitosComponent implements OnInit {

  reqs: Requisito[];
  constructor(private reqS: RequisitoService) { }

  ngOnInit() {
    this.reqS.getRequisitos().subscribe(reqs => this.reqs = reqs);
  }

}
