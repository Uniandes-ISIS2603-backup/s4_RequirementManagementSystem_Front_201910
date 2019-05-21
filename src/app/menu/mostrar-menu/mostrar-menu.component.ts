import { Component, OnInit } from '@angular/core';
import { Objetivo } from '../../objetivo/objetivo';
import {ObjetivoService} from '../../objetivo/objetivo.service'

@Component({
  selector: 'app-mostrar-menu',
  templateUrl: './mostrar-menu.component.html',
  styleUrls: ['./mostrar-menu.component.css']
})
export class MostrarMenuComponent implements OnInit {

  constructor(private objetivoService: ObjetivoService) { }

  objetivos: Objetivo[];

    mostrarObjetivos(){
        this.objetivoService.getObjetivos().subscribe(objs => this.objetivos = objs);
    }

  ngOnInit() {
    this.mostrarObjetivos();
  }

}
