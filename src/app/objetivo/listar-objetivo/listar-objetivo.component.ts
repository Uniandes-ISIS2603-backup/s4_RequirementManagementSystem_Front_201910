import { Component, OnInit } from '@angular/core';
import { ObjetivoService } from '../objetivo.service';
import { Objetivo } from '../objetivo';

@Component({
  selector: 'app-listar-objetivo',
  templateUrl: './listar-objetivo.component.html',
  styleUrls: ['./listar-objetivo.component.css']
})
export class ListarObjetivoComponent implements OnInit {

  objetivos: Objetivo[];
  constructor(private srv: ObjetivoService) {

  }

  ngOnInit() 
  {
    this.srv.getObjetivos().subscribe((objs) => {this.objetivos = objs})
  }

}
