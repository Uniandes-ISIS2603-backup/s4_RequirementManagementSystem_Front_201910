import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CambioService } from '../cambio.service';
import { ActivatedRoute } from '@angular/router';
import { CambioDetail } from '../cambio-detail';
import { CambioUpdateComponent } from '../cambio-update/cambio-update.component';

@Component({
  selector: 'app-cambio-detail',
  templateUrl: './cambio-detail.component.html',
  styleUrls: ['./cambio-detail.component.css']
})
/**
 * Component that shows the detail of a specific change.
 */
export class CambioDetailComponent implements OnInit {
   /**
   * This attribute is initialized in false so that the view is not collapsed when one opens the component.
   */
  public isCollapsed = false;

  /**
    * The component's constructor
    * @param cambioService The change's service
    * @param route The route element which helps to obtain the change's id
    */
  constructor(
    private cambioService: CambioService,
    private route: ActivatedRoute
  ) { }

  /**
    * The change whose details we want to show
    */
  @Input() cambioDetail: CambioDetail;

  /**
    * The change's id retrieved from the address
    */
    cambio_id: number;

  /**
   * Viewchild component that displays the update component, to update a change. 
  */
    @ViewChild(CambioUpdateComponent) update: CambioUpdateComponent;

  /**
  * The method which retrieves the description (detail) of a change.
  */
  getCambioDetail(): void {
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    const cambioId = +this.route.snapshot.paramMap.get('cambioId');
    this.cambioService.getCambioDetail(proyectoId, objetivoId, requisitoId, cambioId)
      .subscribe(cambioDetail => {
        
        this.cambioDetail = cambioDetail;
      });
  }

  /**
   * The method that aims to send the id of the current change, to the update component.
   */
  updateCambio(): void{
    this.update.getCambio();
  }

    /**
      * The method which initializes the component
      * We need to initialize the change so that it is never considered as undefined
      */
    ngOnInit() {
      
    this.cambio_id = +this.route.snapshot.paramMap.get('id');
    console.log("detail: ", this.cambio_id);
    if (this.cambio_id) {
      this.cambioDetail = new CambioDetail();
      this.getCambioDetail();
    }
   /*
    this.route.params.subscribe(routeParams=>{
      this.cambioService.getCambioDetail(routeParams.id).subscribe(cls=>{
        console.log("detail: ", this.cambioDetail);
        this.cambioDetail = cls;
      })
    })*/
    console.log("Detail:  ", this.cambioDetail)

    }

}
