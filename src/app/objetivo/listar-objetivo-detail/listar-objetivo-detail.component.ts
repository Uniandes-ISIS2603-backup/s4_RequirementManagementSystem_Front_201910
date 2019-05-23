import { Objetivo } from '../objetivo';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjetivoService } from '../objetivo.service';
import { RequisitoService } from '../../requisito/requisito.service';
import { CrearObjetivoComponent } from '../crear-objetivo/crear-objetivo.component';
import { Component, OnInit, Input, ViewChild} from '@angular/core';

import { UpdateObjetivoComponent } from '../update-objetivo/update-objetivo.component';
import { Observable } from 'rxjs';
import { Requisito } from 'src/app/requisito/requisito';

@Component({
  selector: 'app-listar-detail-objetivo',
  templateUrl: './listar-objetivo-detail.component.html',
  styleUrls: ['./listar-objetivo-detail.component.css']
})
export class ListarObjetivoDetailComponent implements OnInit {

  /**
   * This attribute is initialized in false so that the view is not collapsed when one opens the component.
   */
  public isCollapsed = false;

  objetivo : any;
  requisitos: Requisito[];

  /**
    * The component's constructor
    * @param proyectoService The project's service
    * @param route The route element which helps to obtain the project's id
    */
  constructor(private router: Router, private requisitoService: RequisitoService, private objetivoService: ObjetivoService,
    private route: ActivatedRoute) 
    {
      console.log(this.objetivoDetail);
      
     }

  /**
   * Viewchild component that displays the update component, to update a case of use. 
  */
  @ViewChild(UpdateObjetivoComponent) update: UpdateObjetivoComponent;

  /**
    * The case of use whose details we want to show
    */
  @Input()   objetivoDetail: Objetivo;

  /**
    * The method which retrieves the comment (detail) of a case of use
    */
  getObjetivoDetail(): void {

    const id = +this.route.snapshot.paramMap.get('proyectoId');
    const oId = +this.route.snapshot.paramMap.get('objetivoId');
    this.objetivoService.getObjetivo(id, oId)
      .subscribe(objetivo => this.objetivoDetail = objetivo); 
    this.requisitoService.getRequisitos(id, oId).subscribe(reqs => this.requisitos = reqs);
  }

 


  /*
  onLoad(params) {

    this.casodeuso_id = parseInt(params['id']);
    console.log(" en detail " + this.casodeuso_id);
    this.casodeusoDetail = new CasodeusoDetail();
    this.getCasosdeusoDetail();
  }*/

  /**
    * The method which initializes the component
    * We need to initialize the case of use so that it is never considered as undefined
    */
  ngOnInit() {
    console.log(this.objetivoDetail)
    this.getObjetivoDetail();
  }

  /**
   * The method that aims to send the id of the current case of use, to the update component.
   */
  updateObjetivo(): void{
    const idP = +this.route.snapshot.paramMap.get('proyectoId');
    this.update.getObjetivo(idP, this.objetivoDetail.id);

  }

  /*ngOnDestroy() {
    this.loader.unsubscribe();
  }
*/
  deleteObjetivo(): void
  { 
    const id = +this.route.snapshot.paramMap.get('proyectoId');
    const oId = +this.route.snapshot.paramMap.get('objetivoId');
    this.objetivoService.deleteObjetivo(id, oId).subscribe((res)=>{
      this.router.navigate(['/proyectos']);
    });
      
  }


}
