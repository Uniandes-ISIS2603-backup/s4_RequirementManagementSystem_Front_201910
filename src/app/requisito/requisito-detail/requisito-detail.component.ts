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
    const id = +this.route.snapshot.paramMap.get('id');
    this.reqService.getRequisito(id)
      .subscribe(req => this.req = req);
  }

  eliminar(): void
  { 
    const id = +this.route.snapshot.paramMap.get('id');
    this.reqService.deleteRequisito(id).subscribe((res)=>{
      this.router.navigate(['/requisitos']);
    });
    alert ("Eliminaste el Requisito actual");
  }
}
