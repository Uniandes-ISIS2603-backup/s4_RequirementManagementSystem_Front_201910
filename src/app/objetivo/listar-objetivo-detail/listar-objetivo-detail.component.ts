import { Component, OnInit } from '@angular/core';
import { Objetivo } from '../objetivo';
import { ActivatedRoute } from '@angular/router';
import { ObjetivoService } from '../objetivo.service';

@Component({
  selector: 'app-listar-objetivo-detail',
  templateUrl: './listar-objetivo-detail.component.html',
  styleUrls: ['./listar-objetivo-detail.component.css']
})
export class ListarObjetivoDetailComponent implements OnInit {

  objetivo: Objetivo;
  constructor( private objetivoService: ObjetivoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getObjetivo();
  }

  getObjetivo() 
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.objetivoService.getObjetivo(id)
      .subscribe(objetivo => this.objetivo = objetivo);
  }

  eliminar(): void
  {
    alert ("Eliminaste el Objetivo actual");
  } 

}
