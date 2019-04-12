import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CasodeusoService } from '../casodeuso.service';
import { CasodeusoDetail } from '../casodeuso-detail';
import { CasodeusoUpdateComponent } from '../casodeuso-update/casodeuso-update.component';

/**
 * Component that shows the detail of a specific case of use.
 */
@Component({
  selector: 'app-casodeuso-detail',
  templateUrl: './casodeuso-detail.component.html',
  styleUrls: ['./casodeuso-detail.component.css']
})
export class CasodeusoDetailComponent implements OnInit {

  /**
   * This attribute is initialized in false so that the view is not collapsed when one opens the component.
   */
  public isCollapsed = false;

  /**
    * The component's constructor
    * @param casodeusoService The case's service
    * @param route The route element which helps to obtain the condition's id
    */
  constructor(private casodeusoService: CasodeusoService,
    private route: ActivatedRoute) 
    {
      console.log(this.casodeusoDetail);
      
     }

  /**
   * Viewchild component that displays the update component, to update a case of use. 
  */
  @ViewChild(CasodeusoUpdateComponent) update: CasodeusoUpdateComponent;

  /**
    * The case of use whose details we want to show
    */
  @Input()   casodeusoDetail: CasodeusoDetail;

  //casodeuso_id: number;

  //loader: any;

  /**
    * The method which retrieves the comment (detail) of a case of use
    */
  getCasosdeusoDetail(): void {

    this.casodeusoService.getCasosdeusoDetail(this.casodeusoDetail.id)
    .subscribe(casodeusoDetail => {
      
      this.casodeusoDetail = casodeusoDetail;
      console.log("-->",this.casodeusoDetail.caminos);
    });  }

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
    console.log(this.casodeusoDetail)
    this.getCasosdeusoDetail();
  }

  /**
   * The method that aims to send the id of the current case of use, to the update component.
   */
  updateCasodeuso(): void{
    this.update.getCasodeuso(this.casodeusoDetail.id);

  }

  /*ngOnDestroy() {
    this.loader.unsubscribe();
  }
*/
}
