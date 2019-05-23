import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AprobacionService } from '../aprobacion.service';
import { AprobacionDetail } from '../aprobacion-detail';
import { UpdateAprobacionComponent } from '../update-aprobacion/update-aprobacion.component';

@Component({
  selector: 'app-detail-aprobacion',
  templateUrl: './detail-aprobacion.component.html',
  styleUrls: ['./detail-aprobacion.component.css']
})
/**
 * Component that shows the detail of a specific approbation.
 */
export class DetailAprobacionComponent implements OnInit {
  /**
   * This attribute is initialized in false so that the view is not collapsed when one opens the component.
   */
  public isCollapsed = false;
  
  /**
    * The component's constructor
    * @param aprobacionService The approbation's service
    * @param route The route element which helps to obtain the approbation's id
    */
  constructor(
    private aprobacionService: AprobacionService,
    private route: ActivatedRoute
  ) { }

  /**
    * The approbation whose details we want to show
    */
  @Input() aprobacionDetail: AprobacionDetail;

  /**
    * The approbation's id retrieved from the address
    */
  aprobacion_id: number;

  /**
   * Viewchild component that displays the update component, to update an approbation. 
  */
  @ViewChild(UpdateAprobacionComponent) update: UpdateAprobacionComponent;

  /**
    * The method which retrieves the comment (detail) of an approbation
    */
  getCambioDetail(): void {
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    const aprobacionId = +this.route.snapshot.paramMap.get('aprobacionId');
    this.aprobacionService.getAprobacionDetail(proyectoId, objetivoId, requisitoId, aprobacionId)
      .subscribe(aprobacionDetail => {
        
        this.aprobacionDetail = aprobacionDetail;
      });
  }

  /**
   * The method that aims to send the id of the current approbation, to the update component.
   */
  updateAprobacion(): void{
    
    this.update.getAprobacion();
  }

  /**
    * The method which initializes the component
    * We need to initialize the approbation so that it is never considered as undefined
    */
    ngOnInit() { 
    this.aprobacion_id = +this.route.snapshot.paramMap.get('id');
    console.log("detail: ", this.aprobacion_id);
    if (this.aprobacion_id) {
      this.aprobacionDetail = new AprobacionDetail();
      this.getCambioDetail();
    }
    console.log("Detail:  ", this.aprobacionDetail)

    }

}
