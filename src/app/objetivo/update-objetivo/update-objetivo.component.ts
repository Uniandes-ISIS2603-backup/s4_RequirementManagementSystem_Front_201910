import { Component, OnInit } from '@angular/core';
import { Objetivo } from '../objetivo';

@Component({
  selector: 'app-update-objetivo',
  templateUrl: './update-objetivo.component.html',
  styleUrls: ['./update-objetivo.component.css']
})
export class UpdateObjetivoComponent implements OnInit {

  objetivo: Objetivo;

  objeto:any = {};

  constructor() { }

  ngOnInit() {
  }

  crearObjetivo() {
    this.objetivo = this.objeto;
    console.log(this.objetivo);
    
  }

}
