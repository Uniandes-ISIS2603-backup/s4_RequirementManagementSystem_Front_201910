import { Component, OnInit } from '@angular/core';
import { Objetivo } from '../mostrar-objetivo/objetivo';
import { ObjetivoService } from '..//objetivo.service';

@Component({
  selector: 'app-listar-objetivos',
  templateUrl: './listar-objetivos.component.html',
  styleUrls: ['./listar-objetivos.component.css']
})
export class ListarObjetivosComponent implements OnInit {

  objs: Objetivo[];
  constructor(private objS: ObjetivoService) { }

  ngOnInit() {
    this.objS.getObjetivos().subscribe(objs => this.objs = objs);
  }

}
