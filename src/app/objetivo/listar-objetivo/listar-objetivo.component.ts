import { Component, OnInit } from '@angular/core';
import { ObjetivoService } from '../objetivo.service';
import { Objetivo } from '../objetivo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-objetivo',
  templateUrl: './listar-objetivo.component.html',
  styleUrls: ['./listar-objetivo.component.css']
})
export class ListarObjetivoComponent implements OnInit {
  //Lista de los objetivos que existen
  objetivos: Objetivo[];

  constructor(private srv: ObjetivoService, private router: Router) {

  }

  //Al iniciar la aplicacion llama al servicio y le pide todos los objetivos que existan
  ngOnInit() 
  {
    this.srv.getObjetivos().subscribe(objs => this.objetivos = objs)
  }

}
