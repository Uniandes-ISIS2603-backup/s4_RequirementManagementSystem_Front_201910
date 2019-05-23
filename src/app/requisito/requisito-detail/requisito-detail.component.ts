import { Component, OnInit } from '@angular/core';
import { Requisito } from '../requisito';
import { RequisitoService } from '../requisito.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

 

@Component({
  selector: 'app-requisito-detail',
  templateUrl: './requisito-detail.component.html',
  styleUrls: ['./requisito-detail.component.css']
})
export class RequisitoDetailComponent implements OnInit {
  

  req: Requisito;
  constructor(private router: Router, private reqService: RequisitoService, private route: ActivatedRoute) { }

  //Al iniciar se obtiene el objetivo actual, que llega de la ruta activada (componente padre).
  ngOnInit() {
    this.getRequisito();
  }

  //Metodo que llama al servicio y pide el servicio actual con el id dado en la ruta
  getRequisito(): void 
  {
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    this.reqService.getRequisito(proyectoId, objetivoId, requisitoId)
      .subscribe(req => this.req = req);
  }

  eliminar(): void
  { 
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    this.reqService.deleteRequisito(proyectoId, objetivoId, requisitoId).subscribe((res)=>{
      this.router.navigate(['/requisitos']);
    });
  }
}
