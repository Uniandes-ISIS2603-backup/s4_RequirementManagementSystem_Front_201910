import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoService } from '../proyecto.service';
import { ProyectoDetail } from '../proyecto-detail';
import {Objetivo} from '../../objetivo/objetivo';
import { UpdateProyectoComponent } from '../update-proyecto/update-proyecto.component';
import { ObjetivoService } from '../../objetivo/objetivo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-proyecto',
  templateUrl: './detail-proyecto.component.html',
  styleUrls: ['./detail-proyecto.component.css']
})
export class DetailProyectoComponent implements OnInit {

  /**
   * This attribute is initialized in false so that the view is not collapsed when one opens the component.
   */
  public isCollapsed = false;

  proyecto : any;
  objetivos: Objetivo[];

  /**
    * The component's constructor
    * @param proyectoService The project's service
    * @param route The route element which helps to obtain the project's id
    */
  constructor(private router: Router, private proyectoService: ProyectoService, private objetivoService: ObjetivoService,
    private route: ActivatedRoute) 
    {
      console.log(this.proyectoDetail);
      
     }

  /**
   * Viewchild component that displays the update component, to update a case of use. 
  */
  @ViewChild(UpdateProyectoComponent) update: UpdateProyectoComponent;

  /**
    * The case of use whose details we want to show
    */
  @Input()   proyectoDetail: ProyectoDetail;

  /**
    * The method which retrieves the comment (detail) of a case of use
    */
  getProyectoDetail(): void {

    const id = +this.route.snapshot.paramMap.get('proyectoId');
    this.proyectoService.getProyectoDetail(id)
      .subscribe(proyecto => this.proyectoDetail = proyecto);   
    this.objetivoService.getObjetivos(id).subscribe(objs => this.objetivos = objs);
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
    console.log(this.proyectoDetail)
    this.getProyectoDetail();
  }

  /**
   * The method that aims to send the id of the current case of use, to the update component.
   */
  updateProyecto(): void{
    this.update.getProyecto(this.proyectoDetail.id);

  }

  /*ngOnDestroy() {
    this.loader.unsubscribe();
  }
*/
  deleteProyecto(): void
  { 
    
    this.proyectoService.deleteProyecto(this.proyectoDetail.id).subscribe((res)=>{
      this.router.navigate(['/proyectos']);
    });
      
  }

}
