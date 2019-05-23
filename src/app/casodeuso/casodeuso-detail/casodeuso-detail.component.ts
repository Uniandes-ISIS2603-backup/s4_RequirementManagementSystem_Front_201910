import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private router: Router, private casodeusoService: CasodeusoService,
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
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    const casoDeUsoId = +this.route.snapshot.paramMap.get('casoDeUsoId');
    //  this.reqService.getRequisito(proyectoId, objetivoId, requisitoId)
    // .subscribe(req => this.req = req);
    this.casodeusoService.getCasosdeusoDetail(proyectoId, objetivoId, requisitoId, casoDeUsoId)
    .subscribe(casoDeUso => this.casodeusoDetail = casoDeUso);
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
  deleteCasodeuso(): void
  { 
    const proyectoId = +this.route.snapshot.paramMap.get('proyectoId');
    const objetivoId = +this.route.snapshot.paramMap.get('objetivoId');
    const requisitoId = +this.route.snapshot.paramMap.get('requisitoId');
    const casoDeUsoId = +this.route.snapshot.paramMap.get('casoDeUsoId');
    this.casodeusoService.deleteCasodeuso(proyectoId, objetivoId, requisitoId, casoDeUsoId).subscribe((res)=>{
      this.router.navigate(['..']);
    });
      
  }
}
