import { Component, OnInit } from '@angular/core';
import { ObjetivoService } from '../objetivo.service';
import { Objetivo } from '../objetivo';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-listar-objetivo',
  templateUrl: './listar-objetivo.component.html',
  styleUrls: ['./listar-objetivo.component.css']
})

export class ListarObjetivoComponent implements OnInit {
  
  //Lista de los objetivos que existen
  objetivos: Objetivo[];

  constructor(private srv: ObjetivoService, private router: Router, private route: ActivatedRoute) {

  }

  //Al iniciar la aplicacion llama al servicio y le pide todos los objetivos que existan
  ngOnInit() 
  {
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    $(document).ready(function(){
	
      $('.element-card').on('click', function(){
        
        if ( $(this).hasClass('open') ) {
          $(this).removeClass('open');
        } else {
          $('.element-card').removeClass('open');
          $(this).addClass('open');
        }
        
      });
      
    });
    this.srv.getObjetivos(proyectoId).subscribe(objs => this.objetivos = objs)
  }

}
