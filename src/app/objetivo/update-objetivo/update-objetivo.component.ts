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
    const id = +this.route.snapshot.paramMap.get('id');
    this.objetivo = this.objeto;
    console.log(id);
    this.servicio.updateObjetivo(id, this.objetivo).subscribe((obj)=> {
      this.objetivo = obj;
    })
    this.router.navigate(['/objetivos/',id])
  }

}
