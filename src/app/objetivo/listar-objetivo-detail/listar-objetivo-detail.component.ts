import { Component, OnInit } from '@angular/core';
import { Objetivo } from '../objetivo';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjetivoService } from '../objetivo.service';

@Component({
  selector: 'app-listar-objetivo-detail',
  templateUrl: './listar-objetivo-detail.component.html',
  styleUrls: ['./listar-objetivo-detail.component.css']
})
export class ListarObjetivoDetailComponent implements OnInit {
  //Objetivo actual a ser detallado
  objetivo: Objetivo;

  constructor( private objetivoService: ObjetivoService, private route: ActivatedRoute, private router:Router) { }

  //Al iniciar se obtiene el objetivo actual
  ngOnInit() {
    this.getObjetivo();
  }

  //Metodo que llama al servicio y pide el servicio actual con el id dado en la ruta
  getObjetivo() 
  {const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    this.objetivoService.getObjetivo(proyectoId, objetivoId)
      .subscribe(objetivo => this.objetivo = objetivo);
  }

  //Metodo para eliminar el objetivo actual. Este método llama el servicio y pide la eliminacion del servicio actual
  eliminar(): void
  {
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    this.objetivoService.deleteObjetivo(proyectoId, objetivoId).subscribe((res)=>{
      this.router.navigate(['/objetivos']);
    });
  } 

}
