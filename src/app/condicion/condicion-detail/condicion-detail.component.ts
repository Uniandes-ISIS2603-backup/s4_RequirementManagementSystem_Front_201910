import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CondicionService } from '../condicion.service';
import { CondicionDetail } from '../condicion-detail';
import { CondicionUpdateComponent } from '../condicion-update/condicion-update.component';

/**
 * Component that shows the detail of a specific condition.
 */
@Component({
  selector: 'app-condicion-detail',
  templateUrl: './condicion-detail.component.html',
  styleUrls: ['./condicion-detail.component.css']
})
export class CondicionDetailComponent implements OnInit {

  /**
   * This attribute is initialized in false so that the view is not collapsed when one opens the component.
   */
  public isCollapsed = false;

  /**
    * The component's constructor
    * @param condicionService The condition's service
    * @param route The route element which helps to obtain the condition's id
    */
  constructor(private condicionService: CondicionService,
    private route: ActivatedRoute) {      
      console.log(this.condicionDetail);
    }

  /**
   * Viewchild component that displays the update component, to update a condition. 
  */
  @ViewChild(CondicionUpdateComponent) update: CondicionUpdateComponent;

  /**
  * The condition whose details we want to show
  */
  @Input()   condicionDetail: CondicionDetail;

  //condicion_id: number;

  /**
    * The method which retrieves the comment (detail) of a condition
    */
  getCondicionesDetail(): void {
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    const casoDeUsoId = +this.route.snapshot.paramMap.get('casoDeUsoId');
    const condicionId = +this.route.snapshot.paramMap.get('condicionId');
    this.condicionService.getCondicionesDetail(proyectoId, objetivoId, requisitoId, casoDeUsoId, condicionId)
    .subscribe(condicionDetail => {
      
      this.condicionDetail = condicionDetail;
    });  }

  /**
    * The method which initializes the component
    * We need to initialize the condition so that it is never considered as undefined
    */
  ngOnInit() {
    console.log("Detail:  ", this.condicionDetail)
    this.getCondicionesDetail();
  }

  /**
   * The method that aims to send the id of the current condition, to the update component.
   */
  updateCondicion(): void{
    this.update.getCondicion(this.condicionDetail.id);

  }

}
