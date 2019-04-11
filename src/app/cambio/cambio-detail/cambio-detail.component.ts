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
export class CambioDetailComponent implements OnInit {
  public isCollapsed = false;


  constructor(
    private cambioService: CambioService,
    private route: ActivatedRoute
  ) { }

  @Input() cambioDetail: CambioDetail;

    cambio_id: number;

    @ViewChild(CambioUpdateComponent) update: CambioUpdateComponent;

  getCambioDetail(): void {
    this.cambioService.getCambioDetail(this.cambio_id)
      .subscribe(cambioDetail => {
        
        this.cambioDetail = cambioDetail;
      });
  }

  updateCambio(): void{
    this.update.getCambio(this.cambioDetail.id);
  }

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
