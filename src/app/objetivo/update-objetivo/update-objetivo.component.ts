import { Component, OnInit } from '@angular/core';
import { Objetivo } from '../objetivo';
import { ObjetivoService } from '../objetivo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-objetivo',
  templateUrl: './update-objetivo.component.html',
  styleUrls: ['./update-objetivo.component.css']
})
export class UpdateObjetivoComponent implements OnInit {

  //Objetivo nuevo a ser creado
  objetivo: Objetivo;

  //Objeto que permite crear un objetivo a traves del formulario
  objeto:any = {};

  constructor(private servicio:ObjetivoService, private router : Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  //Se crea un objetivo del formulario y se actualiza con el id actual
  crearObjetivo() {
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    this.objetivo = this.objeto;
    this.servicio.updateObjetivo(proyectoId, objetivoId, this.objetivo).subscribe((obj)=> {
      this.objetivo = obj;
    })
    // this.intermediateNavigation();
    // this.finalDestination(id);
  }
  // // Métodos auxiliares para refrescar fetcheando desde DB. 
  // intermediateNavigation()
  // {
  //   this.router.navigate(['/objetivos/', ]);
  // }
  // finalDestination(id: number)
  // {
  //   this.router.navigate(['/objetivos/', id]);
  // }
  // cancelarActualizacion(): void
  // {
  //   this.router.navigate(['/objetivos/']);
  // }
}
