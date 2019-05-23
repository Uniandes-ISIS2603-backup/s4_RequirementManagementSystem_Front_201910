import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaminoService } from '../camino.service';
import { CaminoDetail } from '../camino-detail';
import { CaminoUpdateComponent } from '../camino-update/camino-update.component';

/**
 * Component that shows the detail of a specific camino.
 */
@Component({
  selector: 'app-camino-detail',
  templateUrl: './camino-detail.component.html',
  styleUrls: ['./camino-detail.component.css']
})
export class CaminoDetailComponent implements OnInit {

  /**
   * This attribute is initialized in false so that the view is not collapsed when one opens the component.
   */
  public isCollapsed = false;

  /**
    * The component's constructor
    * @param caminoService The camino's service
    * @param route The route element which helps to obtain the camino's id
    */
  constructor(private caminoService: CaminoService, private router:Router,
    private route: ActivatedRoute) {      
      console.log(this.caminoDetail);
    }

  /**
   * Viewchild component that displays the update component, to update a camino. 
  */
  @ViewChild(CaminoUpdateComponent) update: CaminoUpdateComponent;

  /**
  * The camino whose details we want to show
  */
  @Input()   caminoDetail: CaminoDetail;

  //camino_id: number;

  /**
    * The method which retrieves the comment (detail) of a camino
    */
  getCaminosDetail(): void {
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    const casoDeUsoId = +this.route.snapshot.paramMap.get('casoDeUsoId');
    const caminoId = +this.route.snapshot.paramMap.get('caminoId');
    this.caminoService.getCaminosDetail(proyectoId, objetivoId, requisitoId, casoDeUsoId, caminoId)
    .subscribe(caminoDetail => {
      
      this.caminoDetail = caminoDetail;
    });  }

  /**
    * The method which initializes the component
    * We need to initialize the camino so that it is never considered as undefined
    */
  ngOnInit() {
    console.log("Detail:  ", this.caminoDetail)
    this.getCaminosDetail();
  }

  /**
   * The method that aims to send the id of the current camino, to the update component.
   */
  updateCamino(): void{

    this.update.getCamino(this.caminoDetail.idPaso);

  }
  
  deleteCamino(): void
  { 
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    const casoDeUsoId = +this.route.snapshot.paramMap.get('casoDeUsoId');
    const caminoId = +this.route.snapshot.paramMap.get('caminoId');
    this.caminoService.deleteCamino(proyectoId, objetivoId, requisitoId, casoDeUsoId, caminoId).subscribe((res)=>{
      this.router.navigate(['..']);
    });
      
  }

}
