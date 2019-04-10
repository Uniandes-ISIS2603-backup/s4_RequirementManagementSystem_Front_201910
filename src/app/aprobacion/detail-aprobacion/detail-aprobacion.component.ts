import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AprobacionService } from '../aprobacion.service';
import { AprobacionDetail } from '../aprobacion-detail';
import { ListarCambioComponent } from 'src/app/cambio/listar-cambio/listar-cambio.component';

@Component({
  selector: 'app-detail-aprobacion',
  templateUrl: './detail-aprobacion.component.html',
  styleUrls: ['./detail-aprobacion.component.css']
})
export class DetailAprobacionComponent implements OnInit {

  constructor(
    private aprobacionService: AprobacionService,
    private route: ActivatedRoute
  ) { }

  @Input() aprobacionDetail: AprobacionDetail;

    aprobacion_id: number;


  getCambioDetail(): void {
    this.aprobacionService.getAprobacionDetail(this.aprobacion_id)
      .subscribe(aprobacionDetail => {
        
        this.aprobacionDetail = aprobacionDetail;
      });
  }

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
