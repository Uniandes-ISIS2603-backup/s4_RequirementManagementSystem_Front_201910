import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Requisito } from '../requisito';
import { RequisitoService } from '../requisito.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Casodeuso } from '../../casodeuso/casodeuso';
import { CasodeusoService } from '../../casodeuso/casodeuso.service';
import { ModificarRequisitoComponent } from '../modificar-requisito/modificar-requisito.component';

 

@Component({
  selector: 'app-requisito-detail',
  templateUrl: './requisito-detail.component.html',
  styleUrls: ['./requisito-detail.component.css']
})
export class RequisitoDetailComponent implements OnInit {
  
  funcional : boolean; 
  casosDeUso : Casodeuso[];
  constructor(private router: Router, private reqService: RequisitoService, private route: ActivatedRoute, private casoDeUsoService : CasodeusoService) { }


  @ViewChild(ModificarRequisitoComponent) update: ModificarRequisitoComponent;

  @Input() requisitoDetail : Requisito;


  //Al iniciar se obtiene el objetivo actual, que llega de la ruta activada (componente padre).
  ngOnInit() {
    this.getRequisito();
  }

  /**
   * Metodo que lehace update al requisito
   */
  upDateRequisito(){
    this.update.actualizarRequisito();
  }


  //Metodo que llama al servicio y pide el servicio actual con el id dado en la ruta
  getRequisito(): void 
  {
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    this.reqService.getRequisito(proyectoId, objetivoId, requisitoId)
      .subscribe(req => this.requisitoDetail = req);
    this.casoDeUsoService.getCasosdeuso(proyectoId, objetivoId, requisitoId).subscribe(casos => this.casosDeUso = casos);
    this.esFuncional();

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

  esFuncional(): boolean{
    if (this.requisitoDetail.tipo === 'FUNCIONAL'){
      this.funcional = true;
    }
    else{
      this.funcional = false;
    }
    return this.funcional;
  }
}
