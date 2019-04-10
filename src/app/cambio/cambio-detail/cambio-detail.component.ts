import { Component, OnInit, Input } from '@angular/core';
import { CambioService } from '../cambio.service';
import { ActivatedRoute } from '@angular/router';
import { CambioDetail } from '../cambio-detail';

@Component({
  selector: 'app-cambio-detail',
  templateUrl: './cambio-detail.component.html',
  styleUrls: ['./cambio-detail.component.css']
})
export class CambioDetailComponent implements OnInit {

  constructor(
    private cambioService: CambioService,
    private route: ActivatedRoute
  ) { }

  @Input() cambioDetail: CambioDetail;

    cambio_id: number;

  getCambioDetail(): void {
    this.cambioService.getCambioDetail(this.cambio_id)
      .subscribe(cambioDetail => {
        
        this.cambioDetail = cambioDetail;
      });
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
